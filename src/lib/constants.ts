import { TransactionType, Status } from "@/types";

export const dummyTransactions: TransactionType[] = [
  {
    id: "5345h87",
    date: new Date().toLocaleDateString("en-CA"),
    customer: {
      name: "Kelvin Musagala",
      email: "kelvin@gmail.com",
      phone: "+25477770254",
    },
    payment: {
      method: "Visa",
      cardNumber: "**** **** **** 5768",
    },
    amount: "100.00",
    status: "approved" as Status,
  },
  {
    id: "4538l09",
    date: new Date().toLocaleDateString("en-CA"),
    customer: {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+1234567890",
    },
    payment: {
      method: "Visa",
      cardNumber: "**** **** **** 1234",
    },
    amount: 250.75,
    status: "approved" as Status,
  },
  {
    id: "8735g45",
    date: new Date(Date.now() - 86400000).toLocaleDateString("en-CA"), // 1 day ago
    customer: {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      phone: "+0987654321",
    },
    payment: {
      method: "MasterCard",
      cardNumber: "**** **** **** 5678",
    },
    amount: 150.0,
    status: "pending" as Status,
  },
  {
    id: "6732k79",
    date: new Date(Date.now() - 604800000).toLocaleDateString("en-CA"), // 1 week ago
    customer: {
      name: "Carol White",
      email: "carol.white@example.com",
      phone: "+1122334455",
    },
    payment: {
      method: "American Express",
      cardNumber: "**** **** **** 9876",
    },
    amount: 320.5,
    status: "declined" as Status,
  },
  {
    id: "9087d56",
    date: new Date(Date.now() - 2592000000).toLocaleDateString("en-CA"), // 1 month ago
    customer: {
      name: "David Brown",
      email: "david.brown@example.com",
      phone: "+5566778899",
    },
    payment: {
      method: "Discover",
      cardNumber: "**** **** **** 4321",
    },
    amount: 99.99,
    status: "approved" as Status,
  },
  {
    id: "8739u89",
    date: new Date(Date.now() - 31536000000).toLocaleDateString("en-CA"), // 1 year ago
    customer: {
      name: "Emma Davis",
      email: "emma.davis@example.com",
      phone: "+6677889900",
    },
    payment: {
      method: "Visa",
      cardNumber: "**** **** **** 1111",
    },
    amount: 500.0,
    status: "pending" as Status,
  },
];
