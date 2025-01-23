import { FC } from "react";

interface HeadProps {
  path: string;
}
const SeoHead: FC<HeadProps> = ({ path }) => {
  return (
    <>
      <title>{`여기는 ${path ?? "home"}`}</title>
      <meta name="title" content={`여기는 ${path ?? "home"} meta title`} />
      <meta
        name="description"
        content={`여기는 ${path ?? "home"} meta description`}
      />
    </>
  );
};
export default SeoHead;
