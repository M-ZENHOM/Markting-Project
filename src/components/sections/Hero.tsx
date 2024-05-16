import { Icons } from "../Icons";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { motion } from "framer-motion";
import TextWritingEffect from "../TextWritingEffect";

interface IHeroProps {
  translate: (key: string) => string;
}
export default function Hero({ translate }: IHeroProps) {
  return (
    <MaxWidthWrapper className="relative py-[100px]">
      <div className="absolute  w-[800px] h-[200px] bg-gradient-to-br from-purple-500 to-[rgb(133,94,255,0.25)] rounded-full blur-[130px] z-[1px] opacity-50 " />
      <div className="absolute  left-0 bottom-[-150px] w-[800px] h-[200px] bg-gradient-to-br from-purple-500 to-[rgb(133,94,255,0.25)] rounded-full blur-[130px] z-[1px] opacity-50 " />
      <div className="relative flex flex-col justify-center items-center w-full max-w-[800px] mx-auto gap-5 z-[2px]">
        <motion.div
          initial={{ translateY: -20, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
          className="inline-flex gap-3 items-center border rounded-full bg-primary text-primary-foreground px-6 py-1 z-10"
        >
          <Icons.Logo className="w-5 h-5" />
          {translate("HeroSection.subTitle")}
        </motion.div>
        <TextWritingEffect
          className="font-bold text-5xl text-center leading-[1.25]"
          text={translate("HeroSection.title")}
        />
        <motion.p
          initial={{ translateY: -20, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", delay: 0.9 }}
          className="text-center text-xl text-primary"
        >
          {translate("HeroSection.description")}
        </motion.p>
      </div>
      <motion.div
        initial={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", delay: 0.7 }}
        className="bg-primary/25 w-full h-[80vh] mt-20 rounded-xl"
      >
        <img
          src="/hero-img.jpg"
          className="rounded-3xl w-full h-full p-4 object-cover"
        />
      </motion.div>
    </MaxWidthWrapper>
  );
}
