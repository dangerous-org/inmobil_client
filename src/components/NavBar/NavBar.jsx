import SearchInput from "../SearchInput/SearchInput";
import DropMenu from "../DropMenu/DropMenu";
import { Divider } from "@nextui-org/react";
import ButtonSign from "../ButtonSign/ButtonSign";
import authStore from "../../store/authStore";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import utilStore from "../../store/utilStore";

const NavBar = () => {
  const navigate = useNavigate();
  const isAuthenticated = authStore((status) => status.isAuthenticated);
  const closePostModal = utilStore((state)=>state.closePostModal);

  return (
    <header className="navbarHeader" id="nav-bar">
      <nav className="navbar">
        <section id="section1">
          <img
            src="imb_logo.png"
            id="imbLogo"
            alt="inmobil logo"
            onClick={() => {
              closePostModal();
              navigate("/feed");
            }}
          />
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
