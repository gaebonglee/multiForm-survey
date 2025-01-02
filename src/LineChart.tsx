import { Line, LineChart as RechartsLineChart, XAxis } from "recharts";

interface LineChartProps<Data> {
  data: Data[];
  xKey: Extract<keyof Data, string>;
  yKeys: Extract<keyof Data, string>[];
  width?: number;
  height?: number;
}
export default function LineChart<Data extends Record<string, any>>({
  data,
  xKey,
  yKeys,
  width=800,
  height=400
}: LineChartProps<Data>) {
  return (
    <RechartsLineChart data={data} width={width} height={height}>
      <XAxis dataKey={xKey} />
      {yKeys.map((yKey, index) => (
        <Line
          type="monotone"
          dataKey={yKey}
          key={yKey}
          stroke={COLORS[index % COLORS.length]}
        />
      ))}
    </RechartsLineChart>
  );
}

const COLORS = ["#0088fe", "#00c49f", "#ffbb28", "#ff8042"];
