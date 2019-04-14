import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "10/4",
    Amount: 120,
    amt: 2400
  },
  {
    name: "11/4",
    Amount: 15
  },
  {
    name: "12/4",
    Amount: 150
  },
  {
    name: "13/4",
    Amount: 215
  },
  {
    name: "14/4",
    Amount: 155
  },
  {
    name: "15/4",
    Amount: 290
  },
  {
    name: "20/4",
    Amount: 34
  },
  {
    name: "30/4",
    Amount: 40
  }
];

export default class EarningGraph extends PureComponent {
  render() {
    return (
      <BarChart
        width={650}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Amount" fill="#8884d8" />
      </BarChart>
    );
  }
}
