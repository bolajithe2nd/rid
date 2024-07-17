import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Layout component
import DashboardLayout from "./components/Dashboard/Layout/";

// Routes
import Home from "./routes";
import NotFound from "./routes/not-found";

// Dashboard routes
import Transactions from "./routes/dashboard/transactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "payments",
        // element: <Payments />,
        children: [
          { path: "transactions", element: <Transactions /> },
          // { path: "refunds", element: <Refunds /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
