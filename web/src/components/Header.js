import "../styles/core/variables.scss";
import "../styles/core/reset.scss";
import "../styles/core/mixins.scss";
import "../styles/layout/header.scss";

import logo from "../images/logo-awesome-profile-cards.png";

const Header = () => {
  return (
    <header className="header">
      <a rel="noreferrer" href="index.html">
        <img className="logo-awesome-header" src={logo} alt="" />
      </a>
    </header>
  );
};

export default Header;
