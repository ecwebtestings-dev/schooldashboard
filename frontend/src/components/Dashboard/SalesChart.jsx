import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// Dummy data. Replace with API data later (same shape).
const data = [
  { name: "Tuition", value: 45, color: "#3b82f6" },
  { name: "Boarding", value: 30, color: "#8b5cf6" },
  { name: "Transport", value: 15, color: "#10b981" },
  { name: "Uniform & Other", value: 10, color: "#f59e0b" },
];

const total = data.reduce((sum, item) => sum + item.value, 0);

const FeesChart = () => {
  return (
    <div className="bg-card border border-border rounded-md p-4">
      <div className="mb-2">
        <h2 className="text-base font-bold text-heading">Fees by Category</h2>
        <p className="text-sm text-muted">Fee collection distribution</p>
      </div>

      {/* PIE CHART */}
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              paddingAngle={2}
              cornerRadius={0}
              stroke="none"
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "5px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                color: "var(--heading)",
              }}
              itemStyle={{ color: "var(--heading)" }}
              formatter={(value, name) => [`${value}%`, name]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* LEGEND */}
      <ul className="mt-2 space-y-1">
        {data.map((item) => (
          <li key={item.name} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-body">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              {item.name}
            </span>
            <span className="font-medium text-heading">
              {Math.round((item.value / total) * 100)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeesChart;