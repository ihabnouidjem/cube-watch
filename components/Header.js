import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BsChevronDown,
  BsFillGridFill,
  BsCartFill,
  BsFillPersonFill,
} from "react-icons/bs";

function Header({ changeNavbarStatus, currentPage, navbarStatus }) {
  const [isClicked, setIsClicked] = useState(null);
  const page = currentPage.split("/");
  // -- useEffect -------------------------
  useEffect(() => {
    setIsClicked(navbarStatus);
    console.log(navbarStatus);
  }, [navbarStatus]);
  return (
    <div className="header">
      <i
        onClick={() => {
          changeNavbarStatus();
        }}
        className={
          isClicked == true
            ? "header-menu big-icon rotate-right"
            : isClicked == false
            ? "header-menu big-icon rotate-left"
            : "header-menu big-icon"
        }
      >
        <BsFillGridFill />
      </i>
      <Link className="header-cube" href="/">
        <div className="before">{""}</div>
        <h1>
          CUBE <span>{page}</span>
        </h1>
        <div className="after">{""}</div>
      </Link>
      <div className="header-profile-container">
        <i className="small-icon header-chevron">
          <BsChevronDown />
        </i>
        <i className="big-icon header-cart">
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
