import { Helmet } from "react-helmet-async";

interface IHeadProps {
  title: string;
  children?: React.ReactNode;
  description: string;
}
export default function Head({ title, description, children }: IHeadProps) {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      {children}
    </Helmet>
  );
}
