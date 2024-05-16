import { Button } from "../ui/button";

interface IFooterProps {
  translate: (key: string) => string;
}

export default function Footer({ translate }: IFooterProps) {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-white z-10">
      <div className="absolute left-0 w-[600px] h-[900px] bg-gradient-to-br from-purple-500/50 to-yellow-500/50 blur-[150px] -z-10 opacity-60" />
      <div className="md:w-2/3 w-full px-4 text-black flex flex-col">
        <div className="w-full text-7xl font-bold">
          <h1 className="w-full md:w-2/3">{translate("footer.title")}</h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-gray-400">
            {translate("footer.description")}
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <Button size="lg">{translate("footer.btn")}</Button>
          </div>
        </div>
        <div className="flex flex-col py-10">
          <hr className="border-gray-200" />
          <p className="w-full text-center my-12 text-gray-600">
            {translate("footer.copyright")}
          </p>
        </div>
      </div>
    </div>
  );
}
