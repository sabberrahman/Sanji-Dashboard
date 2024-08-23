import { LoaderCircle, TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis, linearGradient, stop } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import CardPhotoExpense from "./CardPhotoExpense";
import PleaseAddData from "./PleaseAddData";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#cc3636",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
}; 

export default function AreaChartExpense({ expenseList }) {
  const [expenseMark, setExpenseMark] = useState([]);

  useEffect(() => {
    setExpenseMark(expenseList);
  }, []);

  console.log(expenseList);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {expenseList.length > 0 ? (
        <Card className="">
          <CardHeader>
            <CardTitle>Recent Expense Chart</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className="p-4 gap-2">
            <ChartContainer config={chartConfig}>
              <BarChart
                accessibilityLayer
                data={expenseMark}
                layout="vertical"
                margin={{
                  left: 0,
                }}
              >
                <YAxis
                  dataKey="name"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  
                />
                <XAxis dataKey="amount" type="number" hide />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                
                <Bar dataKey="amount" layout="vertical" radius={5} fill="#e16655"/>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      ) : (
        <div className='flex flex-col gap-5 items-center justify-center'>
        <p className='text-2xl  font-semibold flex items-center'> Chart Data Loading...<LoaderCircle className="animate-spin"/> </p> 
        <p className='text-sm font-semibold text-black/90 mt-10 text-center'>if chart is not displaying Maybe you need to Add Expense for in your Created Budget</p>
        <p className='text-sm font-semibold text-black/90 mt-0 text-center'> Make sure to add expense to use all chart Functionailty </p>
        <PleaseAddData/>

    </div>
      )}

      <div className="ml-2 rounded-lg mt-2 md:mt-0">
        <CardPhotoExpense/>
      </div>
    </div>
  );
}