import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div>
      Hello World
      <Outlet />
    </div>
  );
}

export default AppLayout;
