"use client";
import { AreaChart, Card, Title } from "@tremor/react";

type TData = {
  date: string;
  visitors: number;
};

export default function ExampleChart({
  data,
  total,
}: {
  data: TData[];
  total: number;
}) {
  return (
    <Card>
      <Title>Website Traffic Over Time</Title>
      <Title>
        <span className="font-bold">Total :</span> {total}
      </Title>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        index="date"
        yAxisWidth={65}
        categories={["visitors"]}
        colors={["indigo", "cyan"]}
      />
    </Card>
  );
}
