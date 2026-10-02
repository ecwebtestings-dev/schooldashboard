import DashBoardCharts from "./DashBoardCharts";
import StatCards from "./StatCards";


export default function DashBoard() {
  return (
    <div className="space-y-4">
      <StatCards/>
      <DashBoardCharts/>
    </div>
  )
}
