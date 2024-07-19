import TransactionCards from "@/components/Dashboard/Transactions/TransactionCards";
import TransactionDetails from "@/components/Dashboard/Transactions/TransactionDetails";
import TransactionTable from "@/components/Dashboard/Transactions/TransactionTable";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/payments/transactions")({
  component: () => (
    <div className="grid sm:grid-cols-[1fr_300px] gap-x-4">
      {/* Main content */}
      <div className="grid gap-y-12">
        <TransactionCards />
        <TransactionTable />
      </div>

      {/* Transaction details */}
      <TransactionDetails />
    </div>
  ),
});
