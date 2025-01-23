import { FC, PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {}
const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  return <>{children}</>;
};
export default Layout;
