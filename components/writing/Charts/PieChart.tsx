import { VictoryPie } from "victory";

interface Props {
  data: { x: string; y: number }[];
  caption: string;
  height: number;
}

function PieChart({ data, caption, height }: Props) {
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
