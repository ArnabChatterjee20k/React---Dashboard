import MonthlyChartProps from "../../types/MonthlyChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const USERCOLOR = "#9BDD7C";
const GUESTCOLOR = "#E9A0A0";

export function DisplayMonthChart({ chartData }: MonthlyChartProps) {
  const { User, Guest } = chartData;
  const dataLabels = Object.keys(User);

  const dataSet = [
    { label: "Guest", data: Object.values(Guest), borderColor: GUESTCOLOR },
    { label: "User", data: Object.values(User), borderColor: USERCOLOR },
  ];

  return (
    <div className="w-[90%] bg-white p-6 rounded-lg flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex flex-col items-start gap-1">
          <h5 className="font-monteserat font-bold text-xl">Activites</h5>
          <select
            name="month"
            id="month"
            className="text-slate-400 text-[13px] -m-1"
          >
            <option value="1">May - June 2021</option>
            <option value="2">June - July 2021</option>
          </select>
        </div>

        <div>
          
        </div>
      </div>
      <Line
        title="Activities"
        options={{
          responsive: true,
          elements: {
            point: {
              radius: 0,
            },
            line: {
              tension: 0.3,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: {
                callback: (value, index, values) => {
                  // Check if the tick value is 0 and return an empty string ('') in that case
                  return value === 0 ? "" : value;
                },
              },
            },
          },
        }}
        data={{ labels: dataLabels, datasets: dataSet }}
      />
    </div>
  );
}
