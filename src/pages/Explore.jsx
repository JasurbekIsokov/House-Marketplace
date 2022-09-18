import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/h25.jpg";
import sellCategoryImage from "../assets/jpg/h24.jpg";

import rentCategoryImage1 from "../assets/jpg/h12.jpg";
import sellCategoryImage1 from "../assets/jpg/sellCategoryImage.jpg";
import CostumeSlider from "../Components/CostumeSlider";

// aos -> animate on scroll
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>

      <main>
        <CostumeSlider />

        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <div data-aos="fade-right">
              <img
                src={rentCategoryImage1}
                alt="rent"
                className="exploreCategoryImg"
              />
              <p className="exploreCategoryName">{/* */}</p>
            </div>
          </Link>
          <Link to="/category/sale">
            <div data-aos="fade-left">
              <img
                src={sellCategoryImage1}
                alt="sell"
                className="exploreCategoryImg"
              />
              <p className="exploreCategoryName">{/* */}</p>
            </div>
          </Link>
        </div>

        <div className="exploreCategories">
          <Link to="/category/rent">
            <div data-aos="fade-right">
              <img
                src={rentCategoryImage}
                alt="rent"
                className="exploreCategoryImg"
              />
              <p className="exploreCategoryName exploreCategoryNameBottom">
                Places for rent
              </p>
            </div>
          </Link>
          <Link to="/category/sale">
            <div data-aos="fade-left">
              <img
                src={sellCategoryImage}
                alt="sell"
                className="exploreCategoryImg "
              />
              <p className="exploreCategoryName exploreCategoryNameBottom">
                Places for sale
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
