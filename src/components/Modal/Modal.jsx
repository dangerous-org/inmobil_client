import { AnimatePresence, motion } from "framer-motion";
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
  const styles = {
    width: `${width}px`,
    height: `${height}px`,
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={"modal-overlay bg-white"}
        style={styles}
      >
        <header className="modal-header">
          {title && (
            <p className="modal-title text-xl font-semibold">{title}</p>
          )}
          <button onClick={onClose} className="close-button">
            Close
          </button>
        </header>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
};
