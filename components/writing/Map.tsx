import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import dynamic from "next/dynamic";
import { useState, memo } from "react";
const DynamicTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

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

interface PreMemoProps {
  data: NUTSRegions;
  setContent: Function;
}

function PreMemo({ data, setContent }: PreMemoProps) {
  const max_value = Math.max(...Object.values(data));

  const colorscale = scaleLinear()
    .domain([0, max_value])
    .range(["#FFFFFF", "#68246D"]);

  const PROJECTION_CONFIG = {
    scale: 5000,
    center: [-2, 52],
  };
  const altUrl = "/nuts1.json";
  return (
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
                      data[geo.properties.nuts118cd] * 100 || 0
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

const PostMemo = memo(PreMemo);

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
        <PostMemo data={data} setContent={setContent} />
        <DynamicTooltip>{content}</DynamicTooltip>
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
