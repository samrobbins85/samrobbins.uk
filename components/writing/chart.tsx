import {
  VictoryAxis,
  VictoryChart,
  VictoryBar,
  VictoryLabel,
  VictoryContainer,
  VictoryLine,
  VictoryScatter,
  VictoryGroup,
  VictoryPie,
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

export function LineChart({
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

interface Bar {
  data: Object[];
  width?: number;
  xlabel?: string;
  ylabel?: string;
  caption?: string;
}

export function BarChart({ data, width, xlabel, ylabel, caption }: Bar) {
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

export function BarMulti({
  data,
  axisLabel,
  caption,
  width,
  padding,
  legendPos,
  offset,
}) {
  return (
    <figure className="grid justify-center">
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
          />

          <VictoryAxis />

          {data.length > 1 && (
            <VictoryLegend
              x={legendPos}
              y={260}
              orientation="horizontal"
              gutter={30}
              style={{ border: { stroke: "black" } }}
              colorScale="qualitative"
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
              />
            ))}
          </VictoryGroup>
        </VictoryChart>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function PieChart({ data }: { data: Object[] }) {
  return (
    <div className="max-w-md mx-auto">
      <VictoryPie
        padding={{ left: 90, right: 90, top: 90, bottom: 90 }}
        data={data}
        colorScale="qualitative"
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        style={{
          labels: {
            fill: "var(--slate12)",
          },
        }}
      />
    </div>
  );
}
