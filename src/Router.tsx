import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
// import HomePage from "./pages/HomePage";
// import ProfilePage from "./pages/ProfilePage";

const pageFiles = import.meta.glob("./pages/**/*.tsx", { eager: true });

type CustomElementType = () => JSX.Element;
type CustomModule = {
  default: CustomElementType;
}

type CustomRoute = {
  path: string;
  Element: CustomElementType;
}


const tempRoutes:CustomRoute[] = [];
for (const filePath of Object.keys(pageFiles)) {
  try {
    const fileName = filePath.match(/\.\/pages\/(.*)\.tsx$/)?.[1] ?? "";
    // ./pages/index.tsx ===> "index"
    if (!fileName) continue;

    // "index" ===> ""
    // "./pages/blog/&id.tsx" ===> "/blog/:id"
    const nomarlizedPathName = fileName.includes("&")
      ? fileName.replace("&", ":")
      : fileName.replace(/\/index/, "");

    tempRoutes.push({
      path:
        fileName === "index"
          ? "/"
          : `/${nomarlizedPathName.toLocaleLowerCase()}`,
      Element: (pageFiles[filePath] as CustomModule).default,
    });
  } catch (err) {
    console.error(err);
    continue;
  }
}

// ./pages/blog/index.tsx ===> "/blog"
// ./page/blog.tsx ===> "/blog"
console.log("tempRoutes", tempRoutes);

const routes = tempRoutes.filter(
  (route, index, arr) =>
    arr.findIndex((_route) => _route.path === route.path) === index
);

const Router = () => {
  return (
    <Layout>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} /> */}
        {routes.map(({ path, Element }) => (
          <Route key={`route-key-${path}`} path={path} element={<Element />} />
        ))}
      </Routes>
    </Layout>
  );
};

export default Router;
