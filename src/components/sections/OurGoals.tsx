import { cn } from "@/utils/tailwind";
import { GradientText } from "../GradientText";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import i18n from "@/i18n";

interface IGoalsProps {
  translate: (
    key: string,
    options?: { returnObjects: true }
  ) => IGoal[] & string;
}
interface IGoal {
  title: string;
  description: string;
  icon: string;
}
export default function OurGoals({ translate }: IGoalsProps) {
  const goals = translate("goals.goals", { returnObjects: true });
  return (
    <MaxWidthWrapper className="py-[100px]">
      <div className="space-y-5 mb-10">
        <GradientText
          className="text-5xl font-bold text-center"
          text={translate("goals.title")}
        />
        <p className="text-xl w-full max-w-[600px] mx-auto text-center">
          {translate("goals.description")}
        </p>
      </div>
      <Carousel dir="ltr" className="w-full ">
        <CarouselContent className="-ml-1">
          {goals.map((goal, i) => (
            <CarouselItem key={i} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <Card className="flex flex-col h-[500px] group relative  rounded-3xl border border-gray-300 backdrop-blur-lg transition-all hover:shadow-lg row-span-2 bg-gradient-to-tr from-transparent via-transparent to-[rgb(133,94,255,0.25)] bg-white">
                <CardHeader>
                  <CardTitle>{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    className={cn(
                      "absolute -right-2 rounded-l-full w-[400px] h-[250px] p-2 transition-transform group-hover:scale-110",
                      {
                        "-left-2 top-14 rounded-l-[0px]  rounded-r-full ":
                          i18n.language === "en",
                      }
                    )}
                    src={goal.icon}
                    alt="test"
                  />
                  <p className="absolute bottom-1 text-md font-semibold my-4 ">
                    {goal.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </MaxWidthWrapper>
  );
}
