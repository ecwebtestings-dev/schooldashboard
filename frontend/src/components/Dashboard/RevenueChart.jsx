import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Dummy data in UGX. Fees peak at the start of each term (Feb, May, Sep)
// and drop during the holidays. Replace with API data later (same shape).
const data = [
  { month: "Jan", fees: 8000000, expenses: 12000000 },
  { month: "Feb", fees: 62000000, expenses: 30000000 },
  { month: "Mar", fees: 38000000, expenses: 28000000 },
  { month: "Apr", fees: 20000000, expenses: 26000000 },
  { month: "May", fees: 58000000, expenses: 31000000 },
  { month: "Jun", fees: 34000000, expenses: 29000000 },
  { month: "Jul", fees: 22000000, expenses: 27000000 },
  { month: "Aug", fees: 12000000, expenses: 24000000 },
  { month: "Sep", fees: 60000000, expenses: 32000000 },
  { month: "Oct", fees: 36000000, expenses: 29000000 },
  { month: "Nov", fees: 18000000, expenses: 26000000 },
  { month: "Dec", fees: 6000000, expenses: 15000000 },
];

export default function FeesVsExpensesChart() {
  return (
    <div className="bg-card border border-border rounded-md p-5">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-heading">Fees vs Expenses</h2>
        <p className="text-sm text-muted">Monthly overview for this year</p>
      </div>

      <div className="h-55">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="1 1" stroke="var(--border)" vertical={false} />

            <XAxis
              dataKey="month"
              stroke="var(--muted)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="var(--muted)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000000}M`}
            />

            <Tooltip
              cursor={{ fill: "var(--bg)", opacity: 0.6 }}
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "5px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                color: "var(--heading)",
              }}
              labelStyle={{ color: "var(--heading)", fontWeight: 600 }}
              formatter={(value, name) => [`UGX ${value.toLocaleString()}`, name]}
            />

            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 12, color: "var(--body)" }}
            />

            <Bar
              dataKey="fees"
              name="Fees"
              fill="var(--primary)"
              radius={[6, 6, 0, 0]}
              maxBarSize={28}
            />
            <Bar
              dataKey="expenses"
              name="Expenses"
              fill="var(--accent)"
              radius={[6, 6, 0, 0]}
              maxBarSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}