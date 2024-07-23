import { DashboardContent } from "@/components/Dashboard/Layout/DashboardContent";
import TransactionCards from "@/components/Dashboard/Transactions/TransactionCards";
import TransactionDetails from "@/components/Dashboard/Transactions/TransactionDetails";
import TransactionTable from "@/components/Dashboard/Transactions/TransactionTable/";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/dashboard/payments/transactions")({
  component: () => <Transaction />,
  pendingComponent: () => (
    <div className="text-center text-3xl py-8">
      <h1>Loading...</h1>
    </div>
  ),
});

function Transaction() {
  const [selectedTransactionId, setSelectedTransactionId] = useState<
    string | number
  >("");

  const handleTransactionClick = (transactionId: string | number) => {
    setSelectedTransactionId(transactionId);
  };

  return (
    <DashboardContent>
      {/*====== Main content ======*/}
      <div className="grid gap-y-12">
        <TransactionCards />
        <TransactionTable
          selectedTransactionId={selectedTransactionId}
          handleTransactionClick={handleTransactionClick}
        />
      </div>

      {/* Transaction details */}
      {selectedTransactionId && (
        <TransactionDetails selectedTransactionId={selectedTransactionId} />
      )}
    </DashboardContent>
  );
}
