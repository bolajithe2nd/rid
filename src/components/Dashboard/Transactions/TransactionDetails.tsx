import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, EllipsisVertical, FileDown, Trash } from "lucide-react";

const TransactionDetails = () => {
  return (
    <div className="hidden gap-y-8 border border-zinc-200 rounded-md shadow-md p-4 h-fit sticky top-24 lg:grid">
      {/* Top */}
      <div className="flex items-start justify-between">
        {/*  */}
        <div className="grid gap-y-2">
          <h3 className="text-slate-900 text-lg">Transaction #5345h87</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Date: July 7, 2024
          </p>
        </div>

        {/*  */}
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
      </div>

      {/* Customer Information */}
      <div className="grid gap-y-2">
        <h3 className="text-slate-900 text-lg">Customer Information</h3>

        <div className="grid gap-y-2 text-slate-500 dark:text-slate-400 text-sm">
          <div className="flex items-center justify-between">
            <span>Customer</span>
            <span>Kelvin Musagala</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Email</span>
            <span>kelvin@gmail.com</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Phone</span>
            <span>+25477770254</span>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="grid gap-y-2">
        <h3 className="text-slate-900 text-lg">Payment Information</h3>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-x-2">
            <CreditCard className="h-4 w-4" />
            <span className="text-slate-500">Visa</span>
          </div>

          <span className="text-slate-500">
            <sup>**** **** ****</sup> 5768
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
