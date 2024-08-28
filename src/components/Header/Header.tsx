import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className={style.wrap}>
      <h1 className={style.logo}>
        <span className={style.red}>Marvel</span> information portal
      </h1>
      <div className={style.pages}>
        <NavLink
          className={({ isActive }) => (isActive ? style.red : "")}
          to="/"
        >
          Characters
        </NavLink>{" "}
        /{" "}
        <NavLink
          className={({ isActive }) => (isActive ? style.red : "")}
          to="/comics"
        >
          Comics
        </NavLink>
      </div>
    </div>
  );
};
