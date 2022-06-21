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
  width?: number;
  xlabel?: string;
  ylabel?: string;
  caption?: string;
  dataSet?: {
    name: string;
    fill: string;
    stroke: string;
    data: { x: string; y: string }[];
  }[];
}

function LineChart({ width, xlabel, ylabel, caption, dataSet }: Line) {
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
            data={dataSet.map((item) => ({
              name: item.name,
              symbol: { fill: item.fill },
            }))}
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
          {dataSet.map((item) => (
            <VictoryGroup key={item.name} data={item.data}>
              <VictoryLine
                x="x"
                y="y"
                style={{
                  data: {
                    stroke: item.stroke,
                  },
                }}
              />
              <VictoryScatter
                x="x"
                y="y"
                style={{
                  data: {
                    fill: item.fill,
                  },
                }}
              />
            </VictoryGroup>
          ))}
        </VictoryChart>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default LineChart;
