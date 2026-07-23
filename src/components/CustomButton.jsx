import PropTypes from 'prop-types';

function CustomButton({ text, color = '#0070f3', onClick, disabled = false }) {
  return (
    <button
      type="button"
      className="custom-button"
      style={{ backgroundColor: color, opacity: disabled ? 0.7 : 1 }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default CustomButton;
