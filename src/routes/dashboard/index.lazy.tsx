import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/dashboard/")({
  component: () => <div>Hello /dashboard/Index!</div>,
});
