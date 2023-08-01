import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Tabs() {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/pokemon">Search</NavLink>{" "}
          </li>
        </ul>
      </header>
      <Suspense fallback="null">
        <Outlet />
      </Suspense>
    </>
  );
}
