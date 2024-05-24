import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import OptionsIcon from "../icons/OptionsIcon";
import utilStore from "../../store/utilStore";

const PostOptions = () => {
  
  const openEditPostModal = utilStore((state) => state.openEditPostModal);

  const handleAction = (key) => {
    switch (key) {
      case "editPost":
        openEditPostModal();
        break;
      case "delete":
        break;
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="absolute top-2 right-1 outline-none bg-transparent z-0">
          <OptionsIcon />
        </button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        onAction={(key) => handleAction(key)}
      >
        <DropdownItem key="editPost">Edit Post</DropdownItem>
        <DropdownItem
          key="delete"
          className="hover:bg-redDefault hover:text-white transition-all duration-200"
          color="none"
        >
          Delete Post
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default PostOptions;
