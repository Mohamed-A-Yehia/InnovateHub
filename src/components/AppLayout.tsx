import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import "../index.css";

function AppLayout() {
  const { pathname } = useLocation();

  return (
    <>
      <div className={pathname === "/" ? "bgImage" : ""}>
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AppLayout;
