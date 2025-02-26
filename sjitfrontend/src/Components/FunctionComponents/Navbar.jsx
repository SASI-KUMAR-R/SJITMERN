import { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  var [dropdown, showDropdown] = useState(false);
  var [dropdown1, showDropdown1] = useState(false);
  return (
    <header>
      <nav style={{ listStyleType: "circle" }}>
        <li className="navli">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="navli">
          <Link to={"/About"}>About</Link>
        </li>
        <li className="navli">
          <Link to={"/Gallery"}>Gallery</Link>
        </li>

        <div
          className="dropmain"
          onMouseEnter={() => showDropdown(!dropdown)}
          onMouseLeave={() => showDropdown(!dropdown)}
        >
          <span>Hooks</span>
          {dropdown && (
            <ol className="dropdown-list">
              <li>
                <Link to={"/use-state"} className="navlink">
                  useState
                </Link>
              </li>
              <li className="link">
                <Link to={"/use-effect"} className="navlink">
                  useEffect
                </Link>
              </li>
              <li className="link">
                <Link to={"/use-effect-api"} className="navlink">
                  useEffectWithAPI
                </Link>
              </li>
              <li className="link">
                <Link to={"/use-ref"} className="navlink">
                  useRef
                </Link>
              </li>
              <li className="link">
                <Link to={"/use-memo"} className="navlink">
                  UseMemo
                </Link>
              </li>
              <li className="link">
                <Link to={"/use-callback"} className="navlink">
                  UseCallback
                </Link>
              </li>
              <li className="link">
                <Link to={"/use-memoize"} className="navlink">
                  UseMemoize
                </Link>
              </li>
            </ol>
          )}
        </div>
        <li className="navli">
          <Link to={"/hoc"}>HoC</Link>
        </li>


        <div
          className="dropmain"
          onMouseEnter={() => showDropdown1(!dropdown1)}
          onMouseLeave={() => showDropdown1(!dropdown1)}
        >
          <span>Memoization</span>
          {dropdown1 && (
            <ol className="dropdown-list">
              <li className="link">
                <Link to={"/example"} className="navlink">
                  Memo
                </Link>
              </li>
              <li className="link">
                <Link to={"/lazy"} className="navlink">
                  LazyLoading
                </Link>
              </li>
            </ol>
          )}
        </div>
        <li className="navli">
                <Link to={"/result"} className="navlink">
                  STUDENT RESULT
                </Link>
          </li>


        <li className="navli">
          <Link to={"/Img"}>Contact</Link>
        </li>
        {/* <li className="navli">
          <Link to={"/Signup"}>Signup</Link>
        </li> */}
        <li className="navli">
          <Link to={"/login"}>Login</Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
