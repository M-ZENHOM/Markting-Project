import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/utils/tailwind";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import LangMenu from "../LangMenu";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { scrollPosition } = useScroll();

  return (
    <header
      className={cn(
        "-top-20 bg-white text-white-foreground transition-all duration-500 p-2",
        {
          "sticky top-2 z-50 w-full max-w-[1440px] mx-auto rounded-lg transition-all duration-500":
            scrollPosition > 100,
        }
      )}
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >
      <MaxWidthWrapper className="flex items-center justify-between gap-4 p-2 self-start transition-all duration-500">
        <Link to="/" className="font-bold text-xl">
          {t("Navbar.logo")}
        </Link>
        <ul className="flex items-center gap-5">
          <Link
            to="/"
            className="[&.active]:underline [&.active]:underline-offset-[15px] [&.active]:font-bold"
          >
            {t("Navbar.home")}
          </Link>
          <Link
            to="/knowledge-management"
            className="[&.active]:underline [&.active]:underline-offset-[15px] [&.active]:font-bold"
          >
            {t("Navbar.knowledge")}
          </Link>
          <Link
            to="/document-management"
            className="[&.active]:underline [&.active]:underline-offset-[15px] [&.active]:font-bold"
          >
            {t("Navbar.document")}
          </Link>
          <Link
            to="/business-management"
            className="[&.active]:underline [&.active]:underline-offset-[15px] [&.active]:font-bold"
          >
            {t("Navbar.business")}
          </Link>
          <Link
            to="/apps"
            className="[&.active]:underline [&.active]:underline-offset-[15px] [&.active]:font-bold"
          >
            {t("Navbar.apps")}
          </Link>
          <LangMenu />
        </ul>
      </MaxWidthWrapper>
    </header>
  );
}
