import { VictoryPie } from "victory";

function PieChart({
  data,
  caption,
  height,
}: {
  data: Object[];
  caption: string;
  height: number;
}) {
  return (
    <figure className="max-w-md mx-auto">
      <VictoryPie
        height={height}
        padding={{ left: 110, right: 110, top: 0, bottom: 0 }}
        data={data}
        colorScale="qualitative"
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        style={{
          labels: {
            fill: "var(--slate12)",
          },
        }}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default PieChart;
