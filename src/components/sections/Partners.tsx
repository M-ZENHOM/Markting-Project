import Marquee from "react-marquee-slider";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { GradientText } from "../GradientText";

const partners = [
  "/partners/01.jpg",
  "/partners/05.jpg",
  "/partners/03.jpg",
  "/partners/04.jpg",
  "/partners/05.jpg",
  "/partners/02.jpg",
  "/partners/05.jpg",
  "/partners/04.jpg",
  "/partners/06.jpg",
];
interface IPartnersProps {
  translate: (key: string) => string;
}
export default function Partners({ translate }: IPartnersProps) {
  return (
    <MaxWidthWrapper className="py-[100px]">
      <GradientText
        className="relative text-5xl font-bold text-center before:content-[''] before:absolute before:-bottom-5 before:left-[50%] before:-translate-x-[50%]  before:w-20 before:h-1 before:bg-gradient-to-br before:from-primary before:to-purple-500"
        text={translate("partners.title")}
      />
      <div className="bg-gradient-to-br from-primary/10 rounded-xl my-20">
        <Marquee
          direction="rtl"
          scatterRandomly={false}
          resetAfterTries={10}
          velocity={100}
          onInit={() => console.log("Marquee initialized")}
          onFinish={() => console.log("Marquee finished")}
        >
          {partners.map((item, i) => (
            <img key={i} src={item} className="w-36 h-36 ml-4" alt="test" />
          ))}
        </Marquee>
      </div>
    </MaxWidthWrapper>
  );
}
