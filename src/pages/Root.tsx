import Footer from "@/components/layouts/Footer";
import { Outlet } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Navbar from "../components/layouts/Navbar";
import SmallNav from "../components/layouts/SmallNav";

export default function Root() {
  const { t, i18n } = useTranslation();
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
      <Footer translate={t} />
      {/* <TanStackRouterDevtools /> */}
    </>
  );
}
