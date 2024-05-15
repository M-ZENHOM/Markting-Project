import { useTranslation } from "react-i18next";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <MaxWidthWrapper>
      <h1>{t("title")}</h1>
    </MaxWidthWrapper>
  );
}
