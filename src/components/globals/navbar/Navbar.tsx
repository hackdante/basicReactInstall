import { Link } from "react-router-dom";
import "./styles/styles.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbarContainer">
        <li>
          <Link to="test/simple-counter">
            <span className="navbarItem">React Counter</span>
          </Link>
        </li>
        <li>
          <Link to="test/counter">
            <span className="navbarItem">Redux Counter</span>
          </Link>
        </li>
        <li>
          <Link to="test/basic-form">
            <span className="navbarItem">Redux Counter</span>
          </Link>
        </li>
        <li>
          <Link to="test/formik">
            <span className="navbarItem">Formik</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
