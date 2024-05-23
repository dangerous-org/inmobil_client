/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import OptionsIcon from "../icons/OptionsIcon";
import utilStore from "../../store/utilStore";
import postStore from "../../store/postStore";

const PostOptions = () => {
  
  const setPostToEdit = postStore((state) => state.setPostToEdit);
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
        <button className="absolute top-2 right-4 outline-none bg-transparent">
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
