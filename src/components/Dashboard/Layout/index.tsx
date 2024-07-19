import Header from "./Header";
import Sidebar from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: JSX.Element }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((prevState) => !prevState);

  useEffect(() => {
    console.log(showSidebar);
  }, [showSidebar]);

  return (
    <>
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Content */}
      <main className="grid grid-cols-1 gap-x-6 md:grid-cols-[200px_minmax(900px,_1fr)_100px] container px-6 mt-8">
        {/* Sidebar */}
        <Sidebar showSidebar={showSidebar} />

        {/* Content Area */}
        <div className="col-span-1 sm:col-span-2 mb-14">
          <div className="grid gap-y-6">
            {/* Breadcrumb */}
            <Breadcrumb />
            {children}
            {/* <Outlet /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
