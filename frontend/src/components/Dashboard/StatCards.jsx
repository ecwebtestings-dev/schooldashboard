import {GraduationCap,Users,Wallet,ClipboardCheck,ArrowDownRight,ArrowUpRight,} from "lucide-react";


const Stats = [
  {
    title: "Total Students",
    value: "1,248",
    change: "+4.2%",
    trend: "Up",
    progress: 82,
    icon: GraduationCap,
    color: "bg-blue-500",
    bgColor: "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
  },
  {
    title: "Total Teachers",
    value: "86",
    change: "+3.6%",
    trend: "Up",
    progress: 90,
    icon: Users,
    color: "bg-violet-500",
    bgColor: "bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400",
  },
  {
    title: "Fees Collected",
    value: "UGX 4,500,000",
    change: "+12.5%",
    trend: "Up",
    progress: 78,
    icon: Wallet,
    color: "bg-emerald-500",
    bgColor: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
  },
  {
    title: "Attendance Rate",
    value: "94.2%",
    change: "-1.3%",
    trend: "Down",
    progress: 94,
    icon: ClipboardCheck,
    color: "bg-orange-500",
    bgColor: "bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400",
  },
];

function StatCard({ stat }) {
  const isUp = stat.trend === "Up";
  const TrendIcon = isUp ? ArrowUpRight : ArrowDownRight;

  return (
    <div
      className="group bg-card border border-border rounded-md p-5 flex flex-col gap-4
        hover:shadow-lg transition-shadow duration-300"
    >
      
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-muted mb-1">{stat.title}</p>
          <p className="text-2xl xl:text-2xl font-medium text-heading truncate">{stat.value}</p>
        </div>

        <div
          className={`p-3 shrink-0 rounded-xl ${stat.bgColor}
            group-hover:scale-110 transition-transform duration-200`}
        >
          <stat.icon className="w-6 h-6" />
        </div>
      </div>

      
      <div className="flex items-center gap-1.5">
        <TrendIcon className={`w-4 h-4 ${isUp ? "text-emerald-500" : "text-red-500"}`} />
        <span className={`text-sm font-semibold ${isUp ? "text-emerald-500" : "text-red-500"}`}>
          {stat.change}
        </span>
        <span className="text-sm text-muted">vs last month</span>
      </div>

      
      <div
        role="progressbar"
        aria-valuenow={stat.progress}
        aria-label={`${stat.title} progress`}
        className="h-2 bg-bg rounded-full overflow-hidden"
      >
        <div
          className={`h-full rounded-full ${stat.color} transition-all duration-500`}
          style={{ width: `${stat.progress}%` }}
        />
      </div>
    </div>
  );
}



export default function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {Stats.map((stat) => (
        <StatCard key={stat.title} stat={stat} />
      ))}
    </div>
  );
}