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
              className="w-[400px] p-2 flex flex-col justify-center items-center text-center grainy"
            >
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
              <CardContent className="font-bold text-xl leading-[1.30] text-primary/75">
                {service.title}
              </CardContent>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
