import Apps from "@/pages/Apps";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/apps")({
  component: () => <Apps />,
});
