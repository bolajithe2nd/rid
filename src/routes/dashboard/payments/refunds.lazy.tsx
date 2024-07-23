import { DashboardContent } from "@/components/Dashboard/Layout/DashboardContent";
import RefundCards from "@/components/Dashboard/Refunds/RefundCards";
import RefundDetails from "@/components/Dashboard/Refunds/RefundDetails";
import RefundTable from "@/components/Dashboard/Refunds/RefundTable/";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/dashboard/payments/refunds")({
  component: () => <Refunds />,
  pendingComponent: () => (
    <div className="text-center text-3xl py-8">
      <h1>Loading...</h1>
    </div>
  ),
});

function Refunds() {
  const [selectedRefundId, setSelectedRefundId] = useState<string | number>("");

  const handleRefundClick = (transactionId: string | number) => {
    setSelectedRefundId(transactionId);
  };

  return (
    <DashboardContent>
      {/*====== Main content ======*/}
      <div className="grid gap-y-12">
        <RefundCards />
        <RefundTable
          selectedRefundId={selectedRefundId}
          handleRefundClick={handleRefundClick}
        />
      </div>

      {/* Transaction details */}
      {selectedRefundId && (
        <RefundDetails selectedRefundId={selectedRefundId} />
      )}
    </DashboardContent>
  );
}
