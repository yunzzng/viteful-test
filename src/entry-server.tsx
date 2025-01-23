import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Router from "./Router";
import { Suspense } from "react";
import SeoHead from "./components/SeoHead";

export const render = () => {
  const html = (path: string) => {
    return ReactDOMServer.renderToString(
      <Suspense fallback={<div>Exec SSR....</div>}>
        <StaticRouter location={path}>
          <Router />
        </StaticRouter>
      </Suspense>
    );
  };

  const seoHead = (path: string) => {
    return ReactDOMServer.renderToString(<SeoHead path={path} />);
  };
  return { html, seoHead };
};
