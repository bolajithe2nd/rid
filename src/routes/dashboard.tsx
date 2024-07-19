import { createFileRoute, Outlet } from "@tanstack/react-router";
import DashboardLayout from "@/components/Dashboard/Layout";

export const Route = createFileRoute("/dashboard")({
  component: Index,
});

function Index() {
  return (
    <>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </>
  );
}
