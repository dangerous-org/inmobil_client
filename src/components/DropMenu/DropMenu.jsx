import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import authStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const DropMenu = ({ setIsOpen }) => {
  const user = authStore((state) => state.user);
  const logOutUser = authStore((state) => state.logOutUser);
  const navigate = useNavigate();

  const handleAction = (key) => {
    switch (key) {
      case "home":
        navigate("/feed");
        break;
      case "newPost":
        setIsOpen(true);
        break;
      case "userInformation":
        navigate(`/${user.userName}/information`);
        break;
      case "logout":
        logOutUser();
        break;
    }
  };
  return (
    <div className="flex items-center gap-4 absolute right-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            as="button"
            className="transition-transform"
            src="https://i.pinimg.com/736x/e3/f5/78/e3f57895ec71b8cc501e0794d975b339.jpg"
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Profile Actions"
          variant="flat"
          onAction={(key) => handleAction(key)}
        >
          <DropdownItem key="profileInfo" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">@{user && user.userName}</p>
          </DropdownItem>
          <DropdownItem
            key="home"
            color="none"
            className="hover:bg-lilaDefault hover:text-white transition-all duration-200"
          >
            Home
          </DropdownItem>
          <DropdownItem
            key="newPost"
            color="none"
            className="hover:bg-lilaDefault hover:text-white transition-all duration-200"
          >
            New Post
          </DropdownItem>
          <DropdownItem
            key="profile"
            color="none"
            className="hover:bg-lilaDefault hover:text-white transition-all duration-200"
          >
            Profile
          </DropdownItem>
          <DropdownItem
            key="userInformation"
            color="none"
            className="hover:bg-lilaDefault hover:text-white transition-all duration-200"
          >
            Personal Information
          </DropdownItem>
          <DropdownItem
            key="settings"
            color="none"
            className="hover:bg-lilaDefault hover:text-white transition-all duration-200"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            key="logout"
            color="none"
            className="hover:bg-redDefault hover:text-white transition-all duration-200"
          >
            LogOut
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropMenu;

DropMenu.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
