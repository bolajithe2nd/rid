import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { getTransactionById } from "@/lib/dummy-api";
import { RefundType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { CreditCard, EllipsisVertical, FileDown, Trash } from "lucide-react";
import React from "react";

interface IDProp {
  selectedRefundId: string | number;
}

// ====== DropdownMenu ======
const MyDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild className="cursor-pointer">
      <EllipsisVertical />
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>
        <FileDown className="mr-2 h-4 w-4" />
        Export
      </DropdownMenuItem>
      <DropdownMenuItem className="text-red-600">
        <Trash className="mr-2 h-4 w-4" />
        Trash
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const RefundDetails: React.FC<IDProp> = ({ selectedRefundId }) => {
  const { isLoading, error, data } = useQuery<RefundType | null, Error>({
    queryKey: ["transactionDetails", selectedRefundId],
    queryFn: async () => getTransactionById(selectedRefundId),
  });

  if (isLoading)
    return (
      <Skeleton className="bg-zinc-100 w-full h-full max-h-[320px] rounded-md sticky top-24 hidden lg:grid" />
    );

  if (error)
    return (
      <div className="text-center text-red-600">Error: {error.message}</div>
    );

  if (!data) return <div className="text-center">No data available</div>;

  return (
    <div className="hidden bg-background gap-y-8 border border-zinc-200 rounded-md shadow-md p-4 h-fit sticky top-24 lg:grid">
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="grid gap-y-2">
          <h3 className="text-slate-900 text-lg">Transaction #{data.id}</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Date: {data.date.toLocaleString()}
          </p>
        </div>
        {/* Dropdown */}
        <MyDropdown />
      </div>

      {/* Customer Information */}
      <div className="grid gap-y-2">
        <h3 className="text-slate-900 text-lg">Customer Information</h3>
        <div className="grid gap-y-2 text-slate-500 dark:text-slate-400 text-sm">
          <div className="flex items-center justify-between">
            <span>Customer</span>
            <span>{data.customer.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Email</span>
            <span>{data.customer.email}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Contact</span>
            <span>{data.customer.phone}</span>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="grid gap-y-2">
        <h3 className="text-slate-900 text-lg">Payment Information</h3>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-x-2">
            <CreditCard className="h-4 w-4" />
            <span className="text-slate-500">{data.payment.method}</span>
          </div>
          <span className="text-slate-500">{data.payment.cardNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default RefundDetails;
