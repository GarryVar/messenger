import Nav from "../Nav/Nav.jsx";
import styles from "./Header.module.css";

const Header = ({ toggleNavMenu, hidden }) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <button className="messenger__nav-btn" onClick={toggleNavMenu} hidden>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="30"
              height="20"
              fillRule="evenodd"
              clipRule="evenodd"
              imageRendering="optimizeQuality"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              viewBox="0 0 30 20"
            >
              <path d="M20 8.405.001 8.219l.004 3.582L20 12zM30 16.398l-29.999.02L.005 20 30 19.993zM30 0 .012.013 0 3.595l29.994.007z" />
            </svg>
          </span>
        </button>
        <Nav toggleNavMenu={toggleNavMenu} hidden={hidden} />
      </div>
    </header>
  );
};

export default Header;
