import { PieChart, Pie, Label, Cell } from "recharts";

const ResultDonutChart = (props) => {
  const { score, totalQuestions } = props;
  const percentage = Math.round((score / totalQuestions) * 100);
  const labelColor = percentage < 80 ? "#F89A5A" : "#10494C";

  const data = [
    {
      name: "Correct",
      value: percentage === 100 ? 100 : percentage,
      fill: labelColor,
    },
    {
      name: "Passing",
      value: percentage < 80 ? 80 - percentage : 0,
      fill: "#E0F2F3",
    },
    { name: "Incorrect", value: percentage < 100 ? 20 : 0, fill: "#FFF0DF" },
  ];

  return (
    <PieChart width={200} height={160}>
      <Pie
        data={data}
        startAngle={200}
        endAngle={-20}
        cx={100}
        cy={100}
        innerRadius={60}
        outerRadius={80}
        paddingAngle={0}
        dataKey="value"
      ></Pie>
      <Pie
        data={[{ value: 100, fill: "#FFF0DF" }]}
        startAngle={0}
        endAngle={360}
        cx={100}
        cy={100}
        innerRadius={0}
        outerRadius={50}
        paddingAngle={0}
        dataKey="value"
        stroke="none"
        animationBegin={0}
        animationDuration={0}
      >
        <Label
          value={`${percentage}%`}
          position="center"
          fontSize="32px"
          fontWeight={700}
          fill={labelColor}
          fontFamily="Komet"
          lineHeight={25}
        />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill="#FFFBF7" />
        ))}
        {data.map((entry, index) => (
          <Cell key={`inner-cell-${index}`} fill="#FFFBF7" />
        ))}
      </Pie>
    </PieChart>
  );
};

export default ResultDonutChart;
