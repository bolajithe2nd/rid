import React from "react";

export const DashboardContent = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="grid sm:grid-cols-[1fr_300px] gap-x-4">{children}</div>;
