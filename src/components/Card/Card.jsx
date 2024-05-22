import PropTypes from "prop-types";
import Carrousel from "../Carrousel/Carrousel";
import { useNavigate } from "react-router-dom";
import LocationIcon from "../icons/LocationIcon";
import User from "../User/User";
import userProfileStore from "../../store/userProfile.store";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import "./Card.css";
import OptionsIcon from "../icons/OptionsIcon";

const Card = ({ post, options = false }) => {

  const navigate = useNavigate();

  const userProfile = userProfileStore((state) => state.userProfile);

  const handleClick = () => {
    navigate(`/post?id=${post._id}`);
  };

  return (
    <div className="card hover:cursor-pointer" onClick={handleClick}>
      <header className="cardHeader relative">
        {options ? (
          <Dropdown>
            <DropdownTrigger>
              <button className="absolute top-2 right-1 outline-none bg-transparent">
                <OptionsIcon />
              </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="edit">Edit Post</DropdownItem>
              <DropdownItem
                key="delete"
                className="hover:bg-redDefault hover:text-white transition-all duration-200"
                color="none"
              >
                Delete Post
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : null}
        <Carrousel images={post.photos} />
      </header>
      <main className="cardBody">
        <div className="cardBodyContent">
          <p className="text-black font-semibold">{post.title}</p>
        </div>
        <User
          userData={post.userData || userProfile.user}
          userProfileData={post.userProfileData || userProfile}
        />
      </main>
      <footer className="cardFooter">
        <strong>${new Intl.NumberFormat("es-CO").format(post.price)}</strong>
        <p>
          <LocationIcon />
          {post.location.length > 15
            ? post.location.substring(0, 15) + "..."
            : post.location}
        </p>
      </footer>
    </div>
  );
};

export default Card;

Card.propTypes = {
  post: PropTypes.object.isRequired,
  options: PropTypes.bool,
};
