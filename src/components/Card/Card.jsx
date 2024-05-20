import PropTypes from "prop-types";
import Carrousel from "../Carrousel/Carrousel";
import { useNavigate } from "react-router-dom";
import LocationIcon from "../icons/LocationIcon";
import User from "../User/User";
import userProfileStore from "../../store/userProfile.store";
import "./Card.css";

const Card = ({ post }) => {
  const navigate = useNavigate();

  const userProfile = userProfileStore((state) => state.userProfile);

  const handleClick = () => {
    navigate(`/post?id=${post._id}`);
  };

  return (
    <div className="card hover:cursor-pointer" onClick={handleClick}>
      <header className="cardHeader">
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
};
