import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const navItems = [
  { title: "Главная", path: "/" },
  { title: "Чат", path: "/chat" },
];

const NavList = () => {
  return (
    <ul className="messenger__nav-list">
      {navItems.map(({ title, path }) => (
        <li key={uuidv4()}>
          <NavLink to={path}>{title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
