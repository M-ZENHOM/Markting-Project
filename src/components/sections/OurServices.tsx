import { GradientText } from "../GradientText";
import { Icons } from "../Icons";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface IServicesProps {
  translate: (
    key: string,
    options?: { returnObjects: true }
  ) => IService[] & string;
}
interface IService {
  title: string;
  description: string;
  icon: string;
}

export default function OurServices({ translate }: IServicesProps) {
  const services = translate("business.services", { returnObjects: true });

  return (
    <div className="w-full py-10 bg-white relative z-[2px] space-y-10">
      <GradientText
        className="text-5xl font-bold text-center"
        text={translate("business.title")}
      />
      <MaxWidthWrapper>
        <div className="grid grid-cols-fluid  gap-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="h-full min-h-[300px]  flex flex-col justify-center items-center group relative list-none break-inside-avoid rounded-3xl border border-gray-300 backdrop-blur-lg transition-all hover:shadow-lg row-span-2 bg-gradient-to-tr from-transparent via-transparent to-[rgb(133,94,255,0.25)] bg-white"
            >
              <img
                src="/BlackGrid.png"
                alt="Dotted grid background"
                className="pointer-events-none absolute right-0 top-0"
              />
              <CardHeader>
                <CardTitle>
                  {service.icon === "website" ? (
                    <Icons.Website className="w-32 h-32" />
                  ) : service.icon === "knowledge" ? (
                    <Icons.Knowledge className="w-32 h-32" />
                  ) : (
                    <Icons.Computer className="w-32 h-32" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="font-bold text-xl leading-[1.30] text-primary/75 text-center">
                {service.title}
              </CardContent>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
