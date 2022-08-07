import React from "react";
import { ComposedChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const bData = [
  {
    breeds: "Labrador",
    total: 1422,
  },
  {
    breeds: "Pit",
    total: 838,
  },
  {
    breeds: "Hound",
    total: 400,
  },
  {
    breeds: "Shepherd",
    total: 376,
  },
  {
    breeds: "Terrier",
    total: 306,
  },
  {
    breeds: "American",
    total: 1422,
  },
];

export default function Breeds() {
  return (
    <ComposedChart
      layout="vertical"
      width={350}
      height={150}
      data={bData}
      margin={{
        top: 0,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <XAxis type="total" />
      <YAxis
        dataKey="breeds"
        type="category"
        scale="band"
        interval={"preserveStartEnd"}
      />
      <Tooltip />
      <Bar dataKey="total" barSize={7} fill="rgb(78, 210, 220)" />
    </ComposedChart>
  );
}
