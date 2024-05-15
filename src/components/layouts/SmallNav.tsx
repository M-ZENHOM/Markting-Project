import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Icons } from "../Icons";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function SmallNav() {
  const { t } = useTranslation();
  return (
    <nav className="bg-slate-500 text-white">
      <MaxWidthWrapper className="flex items-center justify-center gap-6 p-2">
        <Link to="/" className="flex items-center gap-2">
          {t("SmallNav.about")}
          <Icons.About className="w-5 h-5" />
        </Link>
        <Link to="/" className="flex items-center gap-2">
          {t("SmallNav.contact")}
          <Icons.Phone className="w-5 h-5" />
        </Link>
        <Link to="/" className="flex items-center gap-2">
          {t("SmallNav.clients")}
          <Icons.Users className="w-5 h-5" />
        </Link>
      </MaxWidthWrapper>
    </nav>
  );
}
