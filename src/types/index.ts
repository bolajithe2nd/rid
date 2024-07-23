export type Status = "approved" | "pending" | "declined";

export type CustomerType = {
  name: string;
  email: string;
  phone: string;
};

export type PaymentType = {
  method: string;
  cardNumber?: string;
};

export type TransactionType = {
  id: string | number;
  date: Date | string;
  customer: CustomerType;
  payment: PaymentType;
  amount: number | string;
  status: Status;
};

export type RefundType = {
  id: string | number;
  date: Date | string;
  customer: CustomerType;
  payment: PaymentType;
  amount: number | string;
  status: Status;
};
