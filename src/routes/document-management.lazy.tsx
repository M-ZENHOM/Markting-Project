import DocumentManagement from "@/pages/DocumentManagement";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/document-management")({
  component: () => <DocumentManagement />,
});
