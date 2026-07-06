import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Layout.scss";

function Layout() {
  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      <Header />

      <main id="main-content" className="layout__main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;