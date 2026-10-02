import { useState, useEffect } from "react";
import {
  Zap,
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpen,
  ClipboardCheck,
  Calendar,
  CreditCard,
  Library,
  Megaphone,
  MessageSquare,
  FileText,
  Settings,
  ChevronDown,
  PanelLeftClose,
} from "lucide-react";

const MenuItem = [
  { id: "dashboard", Icon: LayoutDashboard, label: "Dashboard" },
  {
    id: "students",
    Icon: GraduationCap,
    label: "Students",
    submenu: [
      { id: "all-students", label: "All Students" },
      { id: "admissions", label: "Admissions" },
      { id: "student-promotion", label: "Promotions" },
    ],
  },
  {
    id: "staff",
    Icon: Users,
    label: "Teachers & Staff",
    submenu: [
      { id: "all-teachers", label: "All Teachers" },
      { id: "non-teaching-staff", label: "Non-Teaching Staff" },
      { id: "staff-roles", label: "Roles and Responsibilities" },
    ],
  },
  {
    id: "academics",
    Icon: BookOpen,
    label: "Academics",
    submenu: [
      { id: "classes", label: "Classes & Streams" },
      { id: "subjects", label: "Subjects" },
      { id: "timetable", label: "Timetable" },
    ],
  },
  {
    id: "attendance",
    Icon: ClipboardCheck,
    label: "Attendance",
    submenu: [
      { id: "student-attendance", label: "Student Attendance" },
      { id: "staff-attendance", label: "Staff Attendance" },
    ],
  },
  {
    id: "exams",
    Icon: FileText,
    label: "Exams & Results",
    submenu: [
      { id: "exam-schedule", label: "Exam Schedule" },
      { id: "grades", label: "Grades & Marks" },
      { id: "report-cards", label: "Report Cards" },
    ],
  },
  {
    id: "fees",
    Icon: CreditCard,
    label: "Fees & Payments",
    submenu: [
      { id: "fee-structure", label: "Fee Structure" },
      { id: "payments", label: "Payments" },
      { id: "balances", label: "Outstanding Balances" },
    ],
  },
  { id: "library", Icon: Library, label: "Library" },
  { id: "calendar", Icon: Calendar, label: "Calendar" },
  { id: "announcements", Icon: Megaphone, label: "Announcements" },
  { id: "messages", Icon: MessageSquare, label: "Messages" },
  { id: "settings", Icon: Settings, label: "Settings" },
];

export default function SideBar({ currentPage, collapsed, onPageChange, onToogle }) {
  const [openMenu, setOpenMenu] = useState(null);

  // Close any open submenu when the sidebar shrinks
  useEffect(() => {
    if (collapsed) setOpenMenu(null);
  }, [collapsed]);

  const handleItemClick = (item) => {
    if (!item.submenu) {
      onPageChange(item.id);
      return;
    }

    
    if (collapsed) {
      onToogle();
      setOpenMenu(item.id);
      return;
    }
    setOpenMenu(openMenu === item.id ? null : item.id);
  };

  return (
    <aside
      className={`${collapsed ? "w-20" : "w-60"} h-full shrink-0 flex flex-col overflow-hidden
        bg-primary-hover dark:bg-card text-white transition-[width] duration-300 ease-in-out`}
    >
      {/* LOGO */}
      <div
        className={`h-16 shrink-0 flex items-center ${collapsed ? "justify-center px-0" : "justify-between px-5"}`}
      >
        {collapsed ? (
          <button
            onClick={onToogle}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/15 hover:bg-white/25
              transition-colors focus-visible:outline-2 focus-visible:outline-white"
          >
            <Zap className="w-5 h-5" />
          </button>
        ) : (
          <>
            <div className="min-w-0 whitespace-nowrap">
              <h1 className="text-lg text-white font-bold leading-tight truncate">CALVARY</h1>
              <p className="text-xs text-white/70 truncate">School Admin</p>
            </div>
            <button
              onClick={onToogle}
              aria-label="Collapse sidebar"
              className="p-2 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors
                focus-visible:outline-2 focus-visible:outline-white"
            >
              <PanelLeftClose className="w-5 h-5 text-slate-400" />
            </button>
          </>
        )}
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-4 flex flex-col gap-1 no-scrollbar">
        {MenuItem.map((item) => {
          const childActive = item.submenu?.some((s) => s.id === currentPage);
          const isActive = currentPage === item.id;
          const isOpen = openMenu === item.id;

          return (
            <div key={item.id}>
              <button
                onClick={() => handleItemClick(item)}
                   title={collapsed ? item.label : undefined}
                   aria-expanded={item.submenu ? isOpen : undefined}
                className={`w-full flex items-center px-3 py-2 transition-colors duration-200
                  focus-visible:outline-2 focus-visible:outline-white
                  ${collapsed ? "justify-center" : "justify-between"}
                  ${isActive? "bg-primary-500 text-white shadow-md": childActive? "bg-white/10 text-white": "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
              >
                <span className="flex items-center gap-2 min-w-0">
                  <item.Icon className="w-5 h-5 shrink-0 text-slate-400" />
                  {!collapsed && (
                    <span className="text-sm  text-slate-400 truncate whitespace-nowrap">{item.label}</span>
                  )}
                </span>

                {!collapsed && item.submenu && (
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                )}
              </button>

              {/* SUBMENU */}
              {!collapsed && item.submenu && isOpen && (
                <div className="ml-5 mt-1 mb-1 pl-4 flex flex-col gap-0.5">
                  {item.submenu.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => onPageChange(s.id)}
                      className={`w-full text-left text-sm  px-3 py-1.5 truncate transition-colors
                        focus-visible:outline-2 focus-visible:outline-white
                        ${currentPage === s.id ? "bg-primary-500 text-white font-semibold": "text-white/70 hover:text-white hover:bg-white/10"
                        }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* USER PROFILE */}
      <div className="shrink-0 border-t border-white/15 p-2">
        <div className={`flex items-center gap-3 rounded-xl p-2 ${collapsed ? "justify-center" : ""}`}>
          <img
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=200&auto=format&fit=crop&q=60"
            alt="Joel Econi"
            className="w-8 h-8 shrink-0 rounded-full object-cover"
          />
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate">Joel Econi</p>
              <p className="text-xs text-white/70 truncate">Administrator</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}