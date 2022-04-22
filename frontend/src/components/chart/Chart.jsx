import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip,
  Legend } from 'recharts';
const Waterdata = [
  {
    location: "NIT",
    demand: "1",
    supply: "0.7",
  },
  {
    location: "AIIMS",
    demand: "0.8",
    supply: "0.8",
  },
  {
    location: "IIT",
    demand: "1.2",
    supply: "1.4",
  },
  {
    location: "NIT",
    demand: "1",
    supply: "0.7",
  },
  {
    location: "AIIMS",
    demand: "1",
    supply: "0.8",
  },
  {
    location: "IIT",
    demand: "1.2",
    supply: "1.4",
  },
];



export default function ChartLine() {
  return (<LineChart width={600} height={300} data={Waterdata} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Tooltip />
      <Legend />
    <Line type="monotone" dataKey="demand" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Line type="monotone" dataKey="supply" stroke="#82ca9d" />
 
    <XAxis dataKey="location" />
    <YAxis  />
  </LineChart>);
  
}