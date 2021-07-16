import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import dynamic from "next/dynamic";
import { useState } from "react";
const DynamicTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

export default function Map({ data }: { data: Object }) {
  const max_value = Math.max(...Object.values(data));
  const [content, setContent] = useState("");

  const colorscale = scaleLinear()
    .domain([0, max_value])
    .range(["#FFFFFF", "#68246D"]);

  const PROJECTION_CONFIG = {
    scale: 5000,
    center: [-2, 52],
  };
  const altUrl = "/nuts1.json";

  return (
    <>
      <ComposableMap data-tip="" projectionConfig={PROJECTION_CONFIG}>
        <ZoomableGroup>
          <Geographies geography={altUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke="#000"
                  fill={
                    data[geo.properties.nuts118cd]
                      ? colorscale(data[geo.properties.nuts118cd])
                      : "#FFF"
                  }
                  onMouseEnter={() =>
                    setContent(
                      `${geo.properties.nuts118nm}: ${(
                        data[geo.properties.nuts118cd] * 100
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
      <DynamicTooltip>{content}</DynamicTooltip>
    </>
  );
}
