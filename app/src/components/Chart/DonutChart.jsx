import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { Bookmark } from "../../assets/Icons";
import { STATUS_COLOR } from "../../utils/Constants";
import "./DonutChart.scss";

const DonutChart = (props) => {
  const { data } = props;

  const renderContent = (data) => {
    return (
      <>
        {data.map((entry, index) => (
          <section key={`${entry.name}-${index}`} className="DonutChart-Legend">
            <Bookmark fillColor={STATUS_COLOR[index]} />
            <section className="DonutChart-Legend-Text-Container">
              <p className="DonutChart-Legend-Main-Text">
                {entry.value} trainee
              </p>
              <p className="DonutChart-Legend-Sub-Text">{entry.name}</p>
            </section>
          </section>
        ))}
      </>
    );
  };

  return (
    <ResponsiveContainer width="80%" height={230}>
      <PieChart>
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          padding={5}
          content={renderContent(data)}
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
