import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";
import "./Analytics.scss";

const AnalyticsCard = () => {
  return (
    <Card sx={{ width: "50%" }}>
      <CardContent>
          <div class="dropdown-container">
              <select>
                <option value="option1" selected>
                  {" "}
                  All Lessons
                </option>
                <option value="option2">Hario 6</option>
                <option value="option3">Chemex</option>
                <option value="option4">AeroPress</option>
                <option value="option5">Kalita Wave</option>
                <option value="option6">Mocha Pot</option>
                <option value="option7">Siphon</option>
              </select>
              <select>
                <option value="option1" selected>
                  All Time
                </option>
                <option value="option2">Today</option>
                <option value="option3">Yesterday</option>
                <option value="option4">Last 7 days</option>
                <option value="option5">Last 30 days</option>
              </select>
          </div>
            <div className="pie-chart-wrapper">
              <PieChart
                data={[
                  { title: "One", value: 10, color: "#E38627" },
                  { title: "Two", value: 15, color: "#C13C37" },
                  { title: "Three", value: 20, color: "#6A2135" },
                ]}
                radius={50}
                lineWidth={65}
                className="custom-pie-chart"
              >
              </PieChart>
            </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
