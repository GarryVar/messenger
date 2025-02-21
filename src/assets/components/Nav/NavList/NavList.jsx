import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styles from "./NavList.module.css";

const navItems = [
  { title: "Главная", path: "/" },
  { title: "Чат", path: "/chat" },
];

const NavList = () => {
  return (
    <ul className={styles.navlist}>
      {navItems.map(({ title, path }) => (
        <li key={uuidv4()}>
          <NavLink to={path}>{title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
