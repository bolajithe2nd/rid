import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileDown, Filter } from "lucide-react";
import { transactions } from "@/lib/constants";
import { TransactionType } from "@/types";

const TransactionTable = () => {
  return (
    <div className="grid gap-y-6">
      {/* Tabs */}
      <Tabs defaultValue="week" className="grid gap-y-4 w-full">
        {/* Table controls */}
        <div className="flex flex-col gap-2 items-end justify-between md:flex-row md:items-center">
          <TabsList className="grid w-full md:w-fit grid-cols-3">
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
          </TabsList>

          {/* Filter & Export */}
          <div className="flex items-center gap-x-1 justify-end">
            <Button
              variant="outline"
              className="rounded-lg cursor-pointer py-1 px-3"
              asChild
            >
              <span>
                <Filter className="w-4 h-4 mr-1" />
                <span className="text-xs">Filter</span>
              </span>
            </Button>
            <Button
              variant="outline"
              className="rounded-lg cursor-pointer py-1 px-3"
              asChild
            >
              <span>
                <FileDown className="w-4 h-4 mr-1" />
                <span className="text-xs">Export</span>
              </span>
            </Button>
          </div>
        </div>

        {/* Tables */}
        <TabsContent value="week">
          <div className="grid gap-y-4 border border-zinc-200 rounded-md shadow-md p-4">
            <div className="grid gap-y-1">
              <h2 className="text-2xl text-slate-900">
                This Week's Transactions
              </h2>
              <p className="text-muted-foreground text-sm">
                Recent transactions from your store
              </p>
            </div>

            {/*  */}
            <Table>
              <TableCaption>A list of your weekly transactions.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.length ? (
                  transactions.map((transaction: TransactionType) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="grid">
                        <span className="text-base">
                          {transaction.customer_name}
                        </span>
                        <span className="text-muted-foreground">
                          {transaction.email}
                        </span>
                      </TableCell>
                      <TableCell>
                        {transaction.status === "Declined" ? (
                          <Badge variant="destructive">
                            {transaction.status}
                          </Badge>
                        ) : transaction.status === "Pending" ? (
                          <Badge className="bg-amber-400">
                            {transaction.status}
                          </Badge>
                        ) : (
                          <Badge className="bg-green-600">
                            {transaction.status}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>${transaction.amount}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">
                      No transactions yet
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="month">
          <div className="grid gap-y-4 border border-zinc-200 rounded-md shadow-md p-4">
            <div className="grid gap-y-1">
              <h2 className="text-2xl text-slate-900">
                This Month's Transactions
              </h2>
              <p className="text-muted-foreground text-sm">
                Recent transactions from your store
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="year">
          <div className="grid gap-y-4 border border-zinc-200 rounded-md shadow-md p-4">
            <div className="grid gap-y-1">
              <h2 className="text-2xl text-slate-900">
                This Year's Transactions
              </h2>
              <p className="text-muted-foreground text-sm">
                Recent transactions from your store
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TransactionTable;
