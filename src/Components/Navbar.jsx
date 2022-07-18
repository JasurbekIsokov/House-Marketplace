import { useNavigate, useLocation } from "react-router-dom";

import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

const Navbar = () => {
  return (
    <footer className="navbar">
      <nav className="navbarBav">
        <ul className="navbarListItems">
          <li className="navbarListItems">
            <ExploreIcon fill="#2c2c2c" width="36px" height="36px" />
            <p>Explore</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
