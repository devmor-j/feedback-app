// import PropTypes from 'prop-types';

export default function Header({ text, textColor }) {
  const headerStyles = { color: textColor };

  return (
    <header style={headerStyles}>
      <h1>{text}</h1>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
  textColor: 'rgb(10,210,110)',
};

// Header.propTypes = {
//   text: PropTypes.string,
//   textColor: PropTypes.string,
// };
