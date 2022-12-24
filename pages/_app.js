import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/Banner.css";
import "../styles/WatchRow.css";
import "../styles/homeHeader.css";
import "../styles/homestories.css";
import "../styles/footer.css";
import "../styles/products.css";
import "../styles/nav.css";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [navbarStatus, setNavbarStatus] = useState(false);
  const [navbarFreeze, setNavbarFreeze] = useState(true);
  const [currentPage, setCurrentPage] = useState("");

  // useEffect section --------------------------------------------------
  useEffect(() => {
    setCurrentPage(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    if (navbarStatus && navbarFreeze) {
      const interval = setInterval(() => {
        setNavbarFreeze(false);
      }, 10000);
      return () => clearInterval(interval);
    }
    if (navbarStatus && !navbarFreeze) {
      setNavbarStatus(false);
      setNavbarFreeze(true);
    }
  }, [navbarFreeze, navbarStatus]);

  // functions section ----------------------------------------------------

  const changeNavbarStatus = () => {
    setNavbarStatus(!navbarStatus);
  };

  const changeNavbarFreeze = () => {
    setNavbarFreeze(!navbarFreeze);
  };

  return (
    <>
      <Header changeNavbarStatus={changeNavbarStatus} />
      <Nav
        changeNavbarFreeze={changeNavbarFreeze}
        navbarStatus={navbarStatus}
        currentPage={currentPage}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
