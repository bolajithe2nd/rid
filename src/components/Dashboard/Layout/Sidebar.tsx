import React from "react";
import { LogOut } from "lucide-react";
import Navigation from "./Navigation";
import { Link } from "@tanstack/react-router";

interface SidebarProps {
  showSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar }) => {
  const sidebarPosition = showSidebar ? "left-0" : "left-[-250px]";

  return (
    <div
      className={`bg-white fixed top-0 bottom-0 ${sidebarPosition} w-[250px] py-10 border border-zinc-200 shadow-md col-span-1 z-20 transition-all lg:rounded-md lg:w-full lg:h-fit lg:top-24 lg:grid lg:sticky lg:p-0`}
    >
      <div className="py-2 px-3 border-b">
        <Link to="" className="text-base text-slate-900 hover:text-blue-600">
          Dashboard
        </Link>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Log out */}
      <button className="flex items-center gap-x-2 py-2 px-3 text-slate-900 hover:text-blue-600 border-t w-full">
        <LogOut className="w-5 h-4" />
        <span>Log out</span>
      </button>
    </div>
  );
};

export default Sidebar;
