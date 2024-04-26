import PropTypes from 'prop-types'
import Carrousel from "../Carrousel/Carrousel";
import "./Card.css";
const Card = ({images}) => {
  
  return (
    <div className="card">
      <header className="cardHeader">
        <Carrousel images={images} />
      </header>
      <main className="cardBody">
        <div className="cardBodyContent">
          <p>
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores de diseño para
            probar el.
          </p>
        </div>
      </main>
      <footer className="cardFooter">
        <strong>$140.000.000.00</strong>
      </footer>
    </div>
  );
};

export default Card;

Card.propTypes = {
  images: PropTypes.array.isRequired
}