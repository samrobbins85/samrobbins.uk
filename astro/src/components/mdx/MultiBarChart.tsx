import {
  VictoryAxis,
  VictoryChart,
  VictoryBar,
  VictoryLabel,
  VictoryContainer,
  VictoryGroup,
  VictoryLegend,
} from "victory";

interface Props {
  data: { title: string; data: { x: string; y: string }[] }[];
  axisLabel: string;
  caption: string;
  width: number;
  padding: number;
  legendPos: number;
  offset: number;
}

function BarMulti({
  data,
  axisLabel,
  caption,
  width,
  padding,
  legendPos,
  offset,
}: Props) {
  return (
    <figure className="grid justify-center bleed">
      <div className="overflow-x-auto">
        <VictoryChart
          width={width}
          domainPadding={padding}
          containerComponent={
            <VictoryContainer
              responsive={false}
              style={{ touchAction: "unset" }}
            />
          }
          padding={{
            left: 90,
            right: 10,
            top: 50,
            bottom: data.length > 1 ? 70 : 30,
          }}
        >
          <VictoryAxis
            label={axisLabel}
            axisLabelComponent={<VictoryLabel dy={-12} />}
            dependentAxis
            style={{
              axisLabel: { fill: "var(--slate12)" },
              axis: { stroke: "var(--slate12)" },
              tickLabels: { fill: "var(--slate12)" },
            }}
          />

          <VictoryAxis
            style={{
              axisLabel: { fill: "var(--slate12)" },
              axis: { stroke: "var(--slate12)" },
              tickLabels: { fill: "var(--slate12)" },
            }}
          />

          {data.length > 1 && (
            <VictoryLegend
              x={legendPos}
              y={260}
              orientation="horizontal"
              gutter={30}
              colorScale="qualitative"
              style={{
                border: { stroke: "var(--slate12)" },
                labels: { fill: "var(--slate12)" },
              }}
              data={data.map((item) => ({
                name: item.title,
              }))}
            />
          )}
          <VictoryGroup offset={offset} colorScale={"qualitative"}>
            {data.map((item, index) => (
              <VictoryBar
                labels={({ datum }) => `${datum.y}`}
                data={item.data}
                key={index}
                style={{
                  labels: {
                    fill: "var(--slate12)",
                  },
                }}
              />
            ))}
          </VictoryGroup>
        </VictoryChart>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default BarMulti;
