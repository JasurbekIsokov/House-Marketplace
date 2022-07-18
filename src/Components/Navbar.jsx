import { useNavigate, useLocation } from "react-router-dom";

import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItems" onClick={() => navigate("/")}>
            <ExploreIcon fill="#2c2c2c" width="36px" height="36px" />
            <p>Explore</p>
          </li>
          <li className="navbarListItems" onClick={() => navigate("/offers")}>
            <OfferIcon fill="#2c2c2c" width="36px" height="36px" />
            <p>Offer</p>
          </li>
          <li className="navbarListItems" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon fill="#2c2c2c" width="36px" height="36px" />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
