export type TransactionStatus = "Approved" | "Pending" | "Declined";

export type TransactionType = {
  id: string | number;
  customer_name: string;
  email: string;
  amount: number | string;
  status: TransactionStatus;
  date: string;
};
