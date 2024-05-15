import KnowladgeManagement from "@/pages/KnowladgeManagement";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/knowledge-management")({
  component: () => <KnowladgeManagement />,
});
