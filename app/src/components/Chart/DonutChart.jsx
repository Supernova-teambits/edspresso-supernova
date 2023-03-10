import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { Bookmark } from "../../assets/Icons";

const COLORS = ["#10494C", "#FFDAAC", "#B84B11"];

const DonutChart = (props) => {
  const { data } = props;

  return (
    <ResponsiveContainer width="80%" height={300}>
      <PieChart>
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          padding={5}
          payload={data.map((item, index) => ({
            value: `${item.value} trainee ${item.name}`,
            legendIcon: <Bookmark fillColor={COLORS[index]} />,
          }))}
        />
        <Pie
          data={data}
          innerRadius={30}
          outerRadius={80}
          paddingAngle={2}
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
