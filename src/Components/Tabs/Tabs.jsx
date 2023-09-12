import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./tabs.module.css";
import { StyledLink } from "./NavlinkStyles";

export default function Tabs() {
  return (
    <>
      <header className={css.header}>
        <nav>
          <StyledLink className={css.link} to="/">
            Home
          </StyledLink>
          <StyledLink className={css.link} to="/pokemon">
            Search
          </StyledLink>
        </nav>
      </header>
      <Suspense fallback="null">
        <Outlet />
      </Suspense>
    </>
  );
}
