import {
  VictoryAxis,
  VictoryChart,
  VictoryBar,
  VictoryLabel,
  VictoryContainer,
} from "victory";

interface Bar {
  data: Object[];
  width?: number;
  xlabel?: string;
  ylabel?: string;
  caption?: string;
}

function BarChart({ data, width, xlabel, ylabel, caption }: Bar) {
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
          padding={{ left: 90, right: 10, top: 50, bottom: 50 }}
        >
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
          <VictoryBar
            data={data}
            x="x"
            y="y"
            labels={({ datum }) => `${datum.y}`}
            style={{
              data: {
                fill: "#68246d",
              },
              labels: {
                fill: "var(--slate12)",
              },
            }}
          />
        </VictoryChart>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default BarChart;
