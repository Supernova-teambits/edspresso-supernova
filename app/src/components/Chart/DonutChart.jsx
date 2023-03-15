import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { Bookmark } from "../../assets/Icons";
import { STATUS_COLOR } from "../../utils/Constants";

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
            legendIcon: <Bookmark fillColor={STATUS_COLOR[index]} />,
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
            <Cell
              key={`cell-${index}`}
              fill={STATUS_COLOR[index % STATUS_COLOR.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
