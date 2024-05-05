import PropTypes from "prop-types";
import Carrousel from "../Carrousel/Carrousel";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({ post }) => {
  return (
    <div className="card">
      <header className="cardHeader">
        <Carrousel images={post.photos} />
      </header>
      <main className="cardBody">
        <div className="cardBodyContent">
          <p>{post.description}</p>
        </div>
        <Link to={`/${post.user.userName}`}>@{post.user.userName}</Link>
      </main>
      <footer className="cardFooter">
        <strong>${post.price}</strong>
      </footer>
    </div>
  );
};

export default Card;

Card.propTypes = {
  post: PropTypes.array.isRequired,
};
