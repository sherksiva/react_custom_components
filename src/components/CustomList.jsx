import PropTypes from 'prop-types';

function CustomList({ items = [], title = 'Items' }) {
  return (
    <div className="custom-list">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

CustomList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

export default CustomList;
