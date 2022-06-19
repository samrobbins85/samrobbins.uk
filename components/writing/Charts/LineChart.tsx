import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryContainer,
  VictoryLine,
  VictoryScatter,
  VictoryGroup,
  VictoryLegend,
} from "victory";

interface Line {
  data: Object[];
  data1: Object[];
  width?: number;
  xlabel?: string;
  ylabel?: string;
  dataName: string;
  data1Name: string;
  caption?: string;
}

function LineChart({
  data,
  width,
  xlabel,
  ylabel,
  data1,
  dataName,
  data1Name,
  caption,
}: Line) {
  return (
    <figure className="grid justify-center">
      <div className="overflow-x-auto">
        <VictoryChart
          domainPadding={40}
          width={width}
          containerComponent={
            <VictoryContainer
              responsive={false}
              style={{ touchAction: "unset" }}
            />
          }
          padding={{ left: 90, right: 0, top: 50, bottom: 110 }}
          height={370}
        >
          <VictoryLegend
            x={150}
            y={320}
            orientation="horizontal"
            gutter={30}
            style={{
              border: { stroke: "var(--slate12)" },
              labels: { fill: "var(--slate12)" },
            }}
            data={[
              { name: dataName, symbol: { fill: "#68246d" } },
              { name: data1Name, symbol: { fill: "#00aeef" } },
            ]}
          />
          <VictoryAxis
            label={xlabel}
            axisLabelComponent={<VictoryLabel dy={10} />}
            style={{
              axisLabel: { fill: "var(--slate12)" },
              axis: { stroke: "var(--slate12)" },
              tickLabels: { fill: "var(--slate12)" },
            }}
          />
          <VictoryAxis
            dependentAxis
            label={ylabel}
            axisLabelComponent={<VictoryLabel dy={-40} />}
            style={{
              axisLabel: { fill: "var(--slate12)" },
              axis: { stroke: "var(--slate12)" },
              tickLabels: { fill: "var(--slate12)" },
            }}
          />
          <VictoryGroup data={data}>
            <VictoryLine
              x="x"
              y="y"
              style={{
                data: {
                  stroke: "#cba8b1",
                },
              }}
            />
            <VictoryScatter
              x="x"
              y="y"
              style={{
                data: {
                  fill: "#68246d",
                },
              }}
            />
          </VictoryGroup>
          <VictoryGroup data={data1}>
            <VictoryLine
              x="x"
              y="y"
              style={{
                data: {
                  stroke: "#a5c8d0",
                },
              }}
            />
            <VictoryScatter
              x="x"
              y="y"
              style={{
                data: {
                  fill: "#00aeef",
                },
              }}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default LineChart;
