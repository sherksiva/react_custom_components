import PropTypes from 'prop-types';

function CustomCard({ title, description, footer, children }) {
  return (
    <article className="custom-card">
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="card-children">{children}</div>
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </article>
  );
}

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  footer: PropTypes.string,
  children: PropTypes.node,
};

export default CustomCard;
