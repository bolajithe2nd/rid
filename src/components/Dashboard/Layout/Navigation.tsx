import { Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Dropdown";
import {
  CreditCard,
  DollarSign,
  FileText,
  RotateCcw,
  Settings,
  Tag,
} from "lucide-react";

interface Links {
  name: string;
  path?: string;
  icon: React.ReactNode;
  sublinks?: Links[];
}
[];

const Navigation = () => {
  const links: Links[] = [
    {
      name: "Payments",
      icon: <CreditCard className="w-5 h-5" />,
      sublinks: [
        {
          name: "Transactions",
          path: "/dashboard/payments/transactions",
          icon: <DollarSign className="w-5 h-5" />,
        },
        {
          name: "Refunds",
          path: "/dashboard/payments/refunds",
          icon: <RotateCcw className="w-5 h-5" />,
        },
      ],
    },
    {
      name: "Checkout",
      path: "/dashboard/checkout",
      icon: <Tag className="w-5 h-5" />,
    },
    {
      name: "Reports",
      path: "/dashboard/reports",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  return (
    <ul className="grid gap-y-1">
      {links.map((link) => (
        <li key={link.name}>
          {link.sublinks?.length ? (
            <Accordion type="multiple">
              <AccordionItem value={`item-1`}>
                <AccordionTrigger>
                  <span className="flex items-center gap-x-2">
                    {link.icon}
                    <span>{link.name}</span>
                  </span>
                </AccordionTrigger>

                {/* Sublinks */}
                <AccordionContent>
                  {link.sublinks.map((sublink) => (
                    <Link
                      key={sublink.name}
                      to={`${sublink.path}`}
                      className="flex items-center gap-x-4 py-2 px-4 text-slate-900 hover:text-blue-600 rid-link [&.active]:text-blue-600"
                    >
                      {sublink.icon}
                      <span>{sublink.name}</span>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <Link
              to={`${link.path}`}
              className="flex items-center gap-x-2 py-2 px-3 text-slate-900 hover:text-blue-600 [&.active]:text-blue-600"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
