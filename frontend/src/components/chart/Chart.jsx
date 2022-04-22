import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";



export default function ChartLine({Waterdata , width , height}) {
  return (
    <LineChart
      width={width}
      height={height}
      data={Waterdata}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Demand" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="Supply" stroke="#82ca9d" />

      <XAxis dataKey="location" />
      <YAxis />
    </LineChart>
  );
}
