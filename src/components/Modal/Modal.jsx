import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./Modal.css";
const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  width = 400,
  height = 200,
}) => {
  if (!isOpen) return null;

  const styles = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={"modal-overlay"}
      style={styles}
    >
      <header className="modal-header">
        {title && <p className="modal-title">{title}</p>}
        <button onClick={onClose} className="close-button">
          Cerrar
        </button>
      </header>
      {children}
    </motion.div>
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};
