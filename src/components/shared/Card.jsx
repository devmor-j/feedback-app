// import PropTypes from 'prop-types';

export default function Card({ children, dark, direction }) {
  return (
    <div className={`card${dark ? ' dark' : ''}`} style={{ flexDirection: direction }}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  dark: false,
};

// Card.propTypes = {
//   children: PropTypes.node.isRequired,
//   dark: PropTypes.bool,
// };
