import PropTypes from 'prop-types';

function CustomModal({ open, title, children, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-box">
        <div className="modal-header">
          <h2 id="modal-title">{title}</h2>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

CustomModal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default CustomModal;
