import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "@mdworld/react-simple-maps";
import { scaleLinear } from "d3-scale";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

interface NUTSRegions {
  UKC?: number;
  UKD?: number;
  UKE?: number;
  UKF?: number;
  UKG?: number;
  UKH?: number;
  UKI?: number;
  UKJ?: number;
  UKK?: number;
}

interface MainMapProps {
  data: NUTSRegions;
  setContent: (content: string) => void;
  id: string;
}

function MainMap({ data, setContent, id }: MainMapProps) {
  const max_value = Math.max(...Object.values(data));

  const colorscale = scaleLinear<string>()
    .domain([0, max_value])
    .range(["#FFFFFF", "#68246D"]);

  const PROJECTION_CONFIG = {
    scale: 5000,
    center: [-2, 52] as [number, number],
  };

  const altUrl = "/nuts1.json";

  return (
    <ComposableMap data-tooltip-id={id} projectionConfig={PROJECTION_CONFIG}>
      <ZoomableGroup>
        <Geographies geography={altUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke="#000"
                fill={
                  data[geo.properties.nuts118cd as keyof NUTSRegions]
                    ? colorscale(
                        data[geo.properties.nuts118cd as keyof NUTSRegions] ?? 0
                      )
                    : "#FFF"
                }
                onMouseEnter={() =>
                  setContent(
                    `${geo.properties.nuts118nm}: ${(
                      (data[geo.properties.nuts118cd as keyof NUTSRegions] ??
                        0) * 100 || 0
                    ).toFixed(1)}%`
                  )
                }
                onMouseLeave={() => setContent("")}
              />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
}

interface Props {
  data: NUTSRegions;
  caption: string;
}

export default function Map({ data, caption }: Props) {
  const [content, setContent] = useState("");

  const max_value = Math.max(...Object.values(data));

  return (
    <figure>
      <div className="border border-radix-slate6">
        <MainMap data={data} setContent={setContent} id={caption} />
        <Tooltip float id={caption} content={content} />
        <div className="mb-4 px-20">
          <div className="flex justify-between">
            <span>0%</span>
            <span>{(max_value * 100).toFixed(1)}%</span>
          </div>
          <div className="map-key rounded" />
        </div>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
