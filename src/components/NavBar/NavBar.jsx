import SearchInput from "../SearchInput/SearchInput";
import DropMenu from "../DropMenu/DropMenu";
import { Divider } from "@nextui-org/react";
import ButtonSign from "../ButtonSign/ButtonSign";
import authStore from "../../store/authStore";
import "./NavBar.css";

const NavBar = () => {
  const isAuthenticated = authStore((status) => status.isAuthenticated);
  return (
    <header className="navbarHeader" id="nav-bar">
      <nav className="navbar">
        <section id="section1">
          <img src="/imb_logo.png" id="imbLogo" alt="inmobil logo" />
          <SearchInput />
        </section>
        <section id="section2">
          {isAuthenticated ? <DropMenu /> : <ButtonSign />}
        </section>
      </nav>
      <Divider />
    </header>
  );
};

export default NavBar;
