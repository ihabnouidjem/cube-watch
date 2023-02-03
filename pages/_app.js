import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Nav from "../components/Nav";
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
import "../styles/admin.css";
import "../styles/productPage.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [navbarStatus, setNavbarStatus] = useState(false);
  const [navbarFreeze, setNavbarFreeze] = useState(true);
  const [currentPage, setCurrentPage] = useState("");

  // useEffect section --------------------------------------------------
  useEffect(() => {
    if (router.pathname == "/products/[productId]") {
      setCurrentPage("/products/..");
    } else {
      setCurrentPage(router.pathname);
    }
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
    <main className="page">
      <Header
        currentPage={currentPage}
        changeNavbarStatus={changeNavbarStatus}
        navbarStatus={navbarStatus}
      />
      <Nav
        changeNavbarFreeze={changeNavbarFreeze}
        navbarStatus={navbarStatus}
        currentPage={currentPage}
      />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
