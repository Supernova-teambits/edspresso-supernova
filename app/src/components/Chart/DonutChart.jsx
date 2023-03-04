import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const COLORS = ["#10494C", "#FFDAAC", "#B84B11"];

const DonutChart = (props) => {
  const { data } = props;

  return (
    <ResponsiveContainer width="80%" height={300}>
      <PieChart>
        <Legend height={36} iconType="circle" iconSize={10} padding={5} />
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
