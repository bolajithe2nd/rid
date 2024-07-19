import { ChevronRight, Search } from "lucide-react";
import React from "react";
import { Link, useLocation } from "@tanstack/react-router";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // if (pathnames.length === 1 && pathnames[0] === "dashboard") {
  //   return null;
  // }

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between">
      {/* Breadcrumb */}
      <div className="flex items-center gap-x-2">
        {pathnames.length === 1 && pathnames[0] === "dashboard" ? (
          ""
        ) : (
          <Link
            to="/dashboard"
            className="text-slate-500 hover:text-blue-600 text-sm"
          >
            Dashboard
          </Link>
        )}
        {pathnames.map((value, index) => {
          if (value === "dashboard") return null;
          const to = `/dashboard/${pathnames.slice(1, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={to}>
              <ChevronRight className="w-4 h-4" />
              {isLast ? (
                <span className="text-blue-600 hover:text-blue-600 text-sm">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </span>
              ) : (
                <Link
                  to={to}
                  className="text-slate-500 hover:text-blue-600 text-sm"
                >
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Search */}
      <div className="flex items-center border border-zinc-200 rounded-md shadow-md h-[45px] py-2 px-4">
        <Search className="w-5 h-5 text-slate-500" />
        <input
          type="text"
          className="pl-2 pr-10 text-slate-900 focus:outline-none focus:ring-blue-500"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Breadcrumb;
