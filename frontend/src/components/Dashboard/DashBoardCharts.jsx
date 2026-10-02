import RevenueChart from "./RevenueChart";
import SalesChart from "./SalesChart";


export default function DashBoardCharts() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
      <div className="xl:col-span-2">
            <RevenueChart/>
      </div>

      <div className="space-y-6">
        <SalesChart/>
      </div>
    </div>
  )
}
