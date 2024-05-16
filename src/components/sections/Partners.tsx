import Marquee from "react-fast-marquee";
import MaxWidthWrapper from "../MaxWidthWrapper";

const partners = [
  "/partners/01.jpg",
  "/partners/02.jpg",
  "/partners/03.jpg",
  "/partners/04.jpg",
  "/partners/05.jpg",
  "/partners/06.jpg",
];
interface IPartnersProps {
  translate: (key: string) => string;
}
export default function Partners({ translate }: IPartnersProps) {
  return (
    <MaxWidthWrapper className="py-[100px]">
      <h1 className="relative text-4xl font-bold text-center before:content-[''] before:absolute before:-bottom-5 before:left-[50%] before:-translate-x-[50%]  before:w-20 before:h-1 before:bg-gradient-to-br before:from-primary before:to-purple-500">
        {translate("partners.title")}
      </h1>
      <div className="bg-gradient-to-br from-primary/10 rounded-xl my-20">
        <Marquee direction="right" pauseOnHover speed={200} autoFill>
          {partners.map((item, i) => (
            <img key={i} src={item} className="w-36 h-36 ml-4" alt="test" />
          ))}
        </Marquee>
      </div>
    </MaxWidthWrapper>
  );
}
