import TransactionDetails from "@/components/Dashboard/Transactions/TransactionDetails";
import TransactionCards from "@/components/Dashboard/Transactions/TransactionCards";
import TransactionTable from "@/components/Dashboard/Transactions/TransactionTable";

const transactions = () => {
  return (
    <div className="grid sm:grid-cols-[1fr_300px] gap-x-4">
      {/* Main content */}
      <div className="grid gap-y-12">
        <TransactionCards />
        <TransactionTable />
      </div>

      {/* Transaction details */}
      <TransactionDetails />
    </div>
  );
};

export default transactions;
