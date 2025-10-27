---
title: "Metro times"
slug: "metro-times"
description: "A Wear OS app showing live times of the Tyne and Wear Metro"
date: 2025-06-15
icon: "mdi:metro"
github: "https://github.com/samrobbins85/metro-times"
technologies:
  - kotlin
  - jetpack-compose
  - nexus
---

After using the [Pop app](https://www.nexus.org.uk/ticket-information/pop/pop-app) for tracking metro times, I wanted to build my own app based on it, which would allow me to see train times on my watch instead of just my phone. To start I looked at the network requests made by the Pop app to see which domain the API was on, and from that could google to find other people who had done the same and discovered which API endpoints were available. The two important endpoints for me were `/stations/platforms` which gave a list of all stations and their platforms and `/times/{station}/{platform}` which I could then use to get the live times.

Using retrofit, I could then build an API service which would allow for requests to that API

```kotlin
interface NexusApiService {
    @GET("stations")
    suspend fun getStations(): Map<String, String>

    @GET("stations/platforms")
    suspend fun getPlatforms(): Map<String, List<PlatformInfo>>

    @GET("times/{station}/{platform}")
    suspend fun getTimes(@Path("station")  station: String, @Path("platform")  platform: String): List<TimeInfo>
}
```

These functions are then used in a small repository to keep the station and platform information together and to allow for changing the implementation of these in the future

```kotlin
interface NexusRepository {
    suspend fun getStations(): Map<String, String>
    suspend fun getPlatforms(): Map<String, List<PlatformInfo>>
}

class NetworkNexusRepository() : NexusRepository {
    override suspend fun getStations(): Map<String, String> {
        return NexusApi.retrofitService.getStations()
    }

    override suspend fun getPlatforms(): Map<String, List<PlatformInfo>> {
        return NexusApi.retrofitService.getPlatforms()
    }
}
```

These are then used in a view model so that when called it will make requests to both APIs and handle API errors

```kotlin
class StationViewModel : ViewModel() {
    var stationState: StationState by mutableStateOf(StationState.Loading)
        private set

    var platformState: PlatformState by mutableStateOf(PlatformState.Loading)
        private set

    private val nexusRepository = NetworkNexusRepository()

    init {
        getStations()
        getPlatforms()
    }

    private fun getStations() {
        viewModelScope.launch {
            stationState = try {
                val listResult = nexusRepository.getStations()
                StationState.Success(listResult)
            } catch (e: IOException) {
                StationState.Error
            }
        }
    }

    private fun getPlatforms() {
        viewModelScope.launch {
            platformState = try {
                val listResult = nexusRepository.getPlatforms()
                PlatformState.Success(listResult)
            } catch (e: IOException) {
                PlatformState.Error
            }
        }
    }
}
```

Then in pages where I need them I can just call this

```kotlin
val stationViewModel: StationViewModel = viewModel()
val platformState = stationViewModel.platformState
val stationState = stationViewModel.stationState
```

Things get a bit more complicated for getting times as that API requires parameters passing to it, notably in the view model, the API needs a factory which can then be used to pass the parameters in pages using the API

```kotlin
companion object {
        fun factory(station: String, platform: String): ViewModelProvider.Factory {
            return object : ViewModelProvider.Factory {
                @Suppress("UNCHECKED_CAST")
                override fun <T : ViewModel> create(
                    modelClass: Class<T>,
                ): T {
                    if (modelClass.isAssignableFrom(TimeViewModel::class.java)) {
                        return TimeViewModel(station, platform) as T
                    }
                    throw IllegalArgumentException("Unknown Class")
                }
            }
        }
    }
```

The data is then fetched using

```kotlin
val timeViewModel: TimeViewModel = viewModel(factory = TimeViewModel.factory(station, platform))
val timeState = timeViewModel.timeState
```

This page also has a refetch button, which calls `timeViewModel.getTimes()` and the data is then updated

For the UI, I mostly made use of the `TitleCard` component which allows for a card with some detail, for example when displaying platforms, the component is used like this

```kotlin
TitleCard(
    onClick = { selectPlatform(platform.platformNumber.toString()) },
    title = { Text("Platform ${platform.platformNumber}") },
    backgroundPainter = CardDefaults.cardBackgroundPainter(
        startBackgroundColor = MaterialTheme.colors.surface,
        endBackgroundColor = MaterialTheme.colors.surface
    )
) {
    Text(text = platform.helperText)
}
```

This one uses the basic styling and has the platform number as the title and then the text in curly brackets afterwards is the main card content which displays which direction the platform is.

For the times I changed the styling more so the cards matched with colours for the lines using the backgroundPainter

```kotlin
title = {
    Text(
        time.destination,
        color = Color(lineColors[time.line]?.title ?: 0xFF70B8FF)
    )
},
backgroundPainter = CardDefaults.cardBackgroundPainter(
    startBackgroundColor = Color(
        lineColors[time.line]?.bg ?: 0xFF0D2847
    ),
    endBackgroundColor = Color(
        lineColors[time.line]?.bg ?: 0xFF0D2847
    )
),
```

These used colours generated by [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/) designed to work well together.

For all the lists I used a `ScalingLazyColumn` which handles all the animations for lists on the watch and lazily loads the items for performance

```kotlin
ScalingLazyColumn(
    columnState = columnState,
    modifier = Modifier.fillMaxSize()

){
  // Column contents
}
```
