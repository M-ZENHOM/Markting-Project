import { cn } from "@/utils/tailwind";

interface IGradientTextProps {
  text: string;
  className?: string;
}
export const GradientText = ({ text, className }: IGradientTextProps) => {
  const firstPart = text.split(" ").slice(0, -1).join(" ");
  const lastWord = text.split(" ")[text.split(" ").length - 1];
  return (
    <h2 className={cn(className)}>
      {firstPart}{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-bl from-primary to-purple-500">
        {lastWord}
      </span>
    </h2>
  );
};
