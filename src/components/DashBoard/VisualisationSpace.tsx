import { DisplayMonthChart } from "../MonthlyCharts/DisplayMonthChart";
import DataCards from "./DataCards";
import MonthlyChartProps from "../../types/MonthlyChart";

const chartsData: MonthlyChartProps = {
  chartData: {
    User: {
      Week0: 100,
      Week1: 400,
      Week2: 200,
      Week3: 500,
      Week4: 250,
      Week5: 367,
    },
    Guest: {
      Week0: 200,
      Week1: 400,
      Week2: 200,
      Week3: 500,
      Week4: 700,
      Week5: 267,
    },
  },
};

export default function VisualisationSpace() {
  return (
    <div className="w-full flex flex-col gap-7">
      <DataCards />
      <DisplayMonthChart chartData={chartsData.chartData} />
    </div>
  );
}
