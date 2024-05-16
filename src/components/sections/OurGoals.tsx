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
              <Card className="h-full relative z-10 rounded-2xl group border border-purple-500/25">
                <div className="absolute top-0 rounded-2xl left-0 w-full h-full bg-gradient-to-tr from-purple-500/15 to-yellow-500/15 -z-10" />
                <CardHeader>
                  <CardTitle>{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    className="rounded-2xl w-full h-[250px] group-hover:scale-105 transition-transform "
                    src={goal.icon}
                    alt="test"
                  />
                  <p className="text-lg font-semibold my-4 ">
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
