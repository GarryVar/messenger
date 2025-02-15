const Nav = ({ toggleNavMenu, hidden }) => {
  return (
    <nav
      className={
        hidden ? "messanger__nav" : "messanger__nav messanger__nav--hidden"
      }
    >
      <button onClick={toggleNavMenu}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width="20"
            height="20"
            fillRule="evenodd"
            clipRule="evenodd"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 20 20"
          >
            <path d="M10.034 6.352 7.621 3.989c-.142-.136-.264-.253-.404-.39L4.41.805c-.148-.15-.703-.739-.821-.799C3.454.086 1.23 2.351.901 2.68c-.28.278-.693.647-.894.904.058.09.291.304.386.396l1.201 1.203c.559.543.945.988 1.588 1.609.268.259.522.537.781.806L5.549 9.21c.135.138.251.269.392.401.171.16.325.293.411.418-.053.112-3.598 3.622-3.947 3.972-.137.139-.259.259-.397.396-.137.137-.27.254-.403.39l-.805.782c-.135.125-.75.69-.8.783l.897.908c.205.212 2.615 2.695 2.692 2.735l6.441-6.426c.111.051.313.293.408.394.134.142.255.266.391.403l3.157 3.214c.266.27.53.523.788.798l.39.403c.13.14.247.276.382.412.139.14.707.757.818.807l3.191-3.2c.106-.105.403-.359.445-.482-.217-.173-1.319-1.252-1.626-1.541-.769-.725-1.639-1.636-2.399-2.36l-.795-.791c-.224-.218-1.521-1.441-1.605-1.597.114-.136.265-.273.395-.401.14-.136.261-.258.397-.397l2.417-2.416c.538-.545 1.064-1.075 1.61-1.612.276-.271.531-.533.807-.805.128-.127.745-.719.793-.814-.111-.155-3.626-3.56-3.661-3.584-.131.122-.206.22-.377.384-.137.132-.254.269-.384.41l-1.171 1.208c-.138.138-.258.26-.396.398-.329.328-3.893 3.914-3.971 3.952z" />
          </svg>
        </span>
      </button>
    </nav>
  );
};

export default Nav;
