import PropTypes from "prop-types";
import Carrousel from "../Carrousel/Carrousel";
import { Link } from "react-router-dom";
import LocationIcon from "../icons/LocationIcon";
import "./Card.css";

const Card = ({ post }) => {
  return (
    <div className="card">
      <header className="cardHeader">
        <Carrousel images={post.photos} />
      </header>
      <main className="cardBody px-4">
        <div className="cardBodyContent">
          <p className="text-black">{post.title}</p>
        </div>
        <Link to={`/${post.user.userName}`}>@{post.user.userName}</Link>
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
