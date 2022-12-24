import Link from "next/link";
import { useContext, useState } from "react";
import { BsHouseFill, BsHandbag, BsFillPersonFill } from "react-icons/bs";

function Nav({ navbarStatus, currentPage, changeNavbarFreeze }) {
  return (
    <div
      className={
        navbarStatus ? "navbar navbar-active" : "navbar navbar-inactive"
      }
    >
      <div className="navbar-section">
        <Link
          onClick={() => changeNavbarFreeze()}
          href="/"
          className={
            currentPage === "/"
              ? "navbar-item navbar-item-currpage"
              : "navbar-item"
          }
        >
          <i className="big-icon">
            <BsHouseFill />
          </i>
          <h3>Home</h3>
        </Link>
        <Link
          onClick={() => changeNavbarFreeze()}
          href="/products"
          className={
            currentPage === "/products"
              ? "navbar-item navbar-item-currpage"
              : "navbar-item"
          }
        >
          <i className="big-icon">
            <BsHandbag />
          </i>
          <h3>Products</h3>
        </Link>
        <Link
          onClick={() => changeNavbarFreeze()}
          href="/"
          className={
            currentPage === "/profile"
              ? "navbar-item navbar-item-currpage"
              : "navbar-item"
          }
        >
          <i className="big-icon">
            <BsFillPersonFill />
          </i>
          <h3>Profile</h3>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
