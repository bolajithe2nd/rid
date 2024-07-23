import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createResource = <T>(promise: Promise<T>) => {
  let status: "pending" | "success" | "error" = "pending";
  let result: T;
  let error: any;

  const suspender = promise.then(
    (r: T) => {
      status = "success";
      result = r;
    },
    (e: any) => {
      status = "error";
      error = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw error;
      } else if (status === "success") {
        return result!;
      } else {
        throw new Error("Unexpected status");
      }
    },
  };
};
