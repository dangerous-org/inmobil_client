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

const PostOptions = ({ post }) => {

  const openEditPostModal = utilStore((state) => state.openEditPostModal);

  const setPostToEdit = postStore((state)=> state.setPostToEdit);

  const handleAction = (key) => {
    switch (key) {
      case "editPost":
        setPostToEdit(post);
        openEditPostModal();            
        break;
      case "delete":
        alert(JSON.stringify(post));
        break;
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="absolute top-2 right-1 outline-none bg-transparent">
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

PostOptions.propTypes = {
  post: PropTypes.object,
};
