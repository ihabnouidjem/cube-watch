import Link from "next/link";
import { BsFillGridFill, BsCartFill, BsFillPersonFill } from "react-icons/bs";

function Header({ changeNavbarStatus }) {
  return (
    <div className="header">
      <i onClick={() => changeNavbarStatus()} className="header-menu big-icon">
        <BsFillGridFill />
      </i>
      <Link className="header-cube" href="/">
        <h1>CUBE</h1>
      </Link>
      <div className="header-profile-container">
        <i className="big-icon">
          <BsCartFill />
        </i>
        <i className="big-icon">
          <BsFillPersonFill />
        </i>
      </div>
    </div>
  );
}

export default Header;
