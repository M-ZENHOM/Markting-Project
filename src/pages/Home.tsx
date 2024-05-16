import Hero from "@/components/sections/Hero";
import OurGoals from "@/components/sections/OurGoals";
import OurServices from "@/components/sections/OurServices";
import Partners from "@/components/sections/Partners";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <main>
      <Hero translate={t} />
      <OurServices translate={t} />
      <OurGoals translate={t} />
      <Partners translate={t} />
    </main>
  );
}
