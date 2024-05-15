import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navbar from "../components/layouts/Navbar";
import { useTranslation } from "react-i18next";
import SmallNav from "../components/layouts/SmallNav";

export default function Root() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <>
      <SmallNav />
      <Navbar />
      <main
        className="min-h-[300vh] antialiased grainy"
        dir={currentLang === "ar" ? "rtl" : "ltr"}
      >
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  );
}
