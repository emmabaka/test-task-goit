import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "70px" }}>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
