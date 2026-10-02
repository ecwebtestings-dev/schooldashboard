import { useState } from "react";
import Header from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";
import DashBoard from "./components/Dashboard/DashBoard";

export default function App() {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="flex h-screen overflow-hidden bg-bg">
      <SideBar
        collapsed={sideBarCollapsed}
        onToogle={() => setSideBarCollapsed((c) => !c)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      
      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <Header
          onProfile={() => setCurrentPage("profile")}
          onSettings={() => setCurrentPage("settings")}
        />

        <main className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {currentPage === "dashboard" && <DashBoard />}
          </div>
        </main>
      </div>
    </div>
  );
}