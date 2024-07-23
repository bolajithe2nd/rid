import { TransactionType } from "@/types";
import { dummyTransactions } from "./constants";

export const fetchAllTransactions = async (): Promise<TransactionType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyTransactions);
    }, 2500);
  });
};

export const getTransactionById = (
  id: string | number
): Promise<TransactionType | null> => {
  return new Promise((resolve) => {
    const transaction = dummyTransactions.find(
      (transaction) => transaction.id === id
    );
    setTimeout(() => resolve(transaction || null), 2500);
  });
};
