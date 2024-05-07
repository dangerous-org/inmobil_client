import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import authStore from "../../store/authStore";
import utilStore from "../../store/utilStore";
import { useNavigate } from "react-router-dom";

const DropMenu = () => {
  const navigate = useNavigate();

  const user = authStore((state) => state.user);
  const logOutUser = authStore((state) => state.logOutUser);

  // const currentPath = utilStore((state) => state.currentPath);
  const dropMenuDisabled = utilStore((state) => state.dropMenuDisabled);
  const setDropMenuDisabled = utilStore((state) => state.setDropMenuDisabled);
  const openModal = utilStore((state) => state.openModal);

  const handleAction = (key) => {
    switch (key) {
      case "home":
        navigate("/feed");
        break;
      case "newPost":
        setDropMenuDisabled(true);
        openModal();
        break;
      case "userInformation":
        navigate(`/${user.userName}/information`);
        break;
      case "profile":
        navigate(`/${user.userName}`);
        break;
      case "logout":
        logOutUser();
        break;
    }
  };

  return (
    <div className="flex items-center gap-4 absolute right-6">
      <Dropdown placement="bottom-end" isDisabled={dropMenuDisabled}>
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src="https://i.pinimg.com/564x/da/4c/31/da4c31567bb5dae43982c181bf1f11f7.jpg"
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Profile Actions"
          variant="flat"
          onAction={(key) => handleAction(key)}
        >
          <DropdownItem
            key="profileInfo"
            textValue={`Signed in as @${user && user.userName}`}
            className="h-14 gap-2"
          >
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">@{user && user.userName}</p>
          </DropdownItem>
          <DropdownItem
            key="home"
            textValue="Home"
            color="none"
            className="hover:bg-lilaDefault hover:text-white transition-all duration-200"
          >
            Home
          </DropdownItem>
          <DropdownItem
            key="newPost"
            textValue="New Post"
            color="none"
            className="hover:bg-lilaDefault hover:text-white transition-all duration-200"
          >
            New Post
          </DropdownItem>
          <DropdownItem
            key="profile"
            textValue="Profile"
            color="none"
            className="hover:bg-lilaDefault hover:text-white transition-all duration-200"
          >
            Profile
          </DropdownItem>
          <DropdownItem
            key="userInformation"
            textValue="Personal Information"
            color="none"
            className="hover:bg-lilaDefault hover:text-white transition-all duration-200"
          >
            Personal Information
          </DropdownItem>
          <DropdownItem
            key="settings"
            textValue="Settings"
            color="none"
            className="hover:bg-lilaDefault hover:text-white transition-all duration-200"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            key="logout"
            textValue="LogOut"
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
