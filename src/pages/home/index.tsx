import { useEffect } from "react";

const HomePage = () => {
  const testFeetch = async () => {
    const result = await fetch("/api/test")
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
        return null;
      });
    console.log(result);
  };
  useEffect(() => {
    testFeetch();
  }, []);
  return (
    <>
      <h2>Home Pageee</h2>
    </>
  );
};
export default HomePage;
