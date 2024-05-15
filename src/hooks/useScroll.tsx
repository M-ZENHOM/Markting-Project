import React from "react";

interface IScroll {
  scrollPosition: number;
}
export const useScroll = (): IScroll => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrollPosition,
  };
};
