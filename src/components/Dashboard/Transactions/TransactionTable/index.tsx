import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { dummyTransactions } from "@/lib/constants";
import { TransactionType } from "@/types";
import { FilterExport } from "./FilterExport";
import { useState } from "react";
import { MyTabsList } from "./MyTabsList";

interface IDProp {
  handleTransactionClick: (transactionId: string | number) => void;
  selectedTransactionId: string | number;
}

const TransactionTable: React.FC<IDProp> = ({
  handleTransactionClick,
  selectedTransactionId,
}) => {
  const [status, setStatus] = useState<string>("all");
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>();

  const resetAll = () => {
    setStatus("all");
    setAmount("");
    setDate(undefined);
  };

  return (
    <div className="grid gap-y-6">
      {/*====== Tabs ======*/}
      <Tabs defaultValue="week" className="grid gap-y-4 w-full">
        {/* Table controls */}
        <div className="flex flex-col gap-2 items-end justify-between md:flex-row md:items-center">
          {/* Tablist */}
          <MyTabsList />

          {/* Filter & Export */}
          <FilterExport
            status={status}
            amount={amount}
            date={date}
            setStatus={setStatus}
            setAmount={setAmount}
            setDate={setDate}
            resetAll={resetAll}
          />
        </div>

        {/*====== Tables ======*/}
        {/* Weekly */}
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
                {dummyTransactions.length ? (
                  dummyTransactions.map((transaction: TransactionType) => (
                    <TableRow
                      key={transaction.id}
                      onClick={() => handleTransactionClick(transaction.id)}
                      className={`cursor-pointer ${selectedTransactionId === transaction.id && "bg-zinc-200"}`}
                    >
                      <TableCell className="grid">
                        <span className="text-base">
                          {transaction.customer.name}
                        </span>
                        <span className="text-muted-foreground">
                          {transaction.customer.email}
                        </span>
                      </TableCell>
                      <TableCell>
                        {transaction.status === "declined" ? (
                          <Badge variant="destructive">
                            {transaction.status}
                          </Badge>
                        ) : transaction.status === "pending" ? (
                          <Badge className="bg-amber-400 uppercase">
                            {transaction.status}
                          </Badge>
                        ) : (
                          <Badge className="bg-green-600">
                            {transaction.status}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>{transaction.date.toLocaleString()}</TableCell>
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

        {/* Monthly */}
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
        {/* Yearly */}
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
