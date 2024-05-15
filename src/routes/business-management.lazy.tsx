import BusinessManagement from "@/pages/BusinessManagement";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/business-management")({
  component: () => <BusinessManagement />,
});
