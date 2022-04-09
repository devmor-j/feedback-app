function Button({ children, type, isDisabled }) {
  return (
    <button type={ type } disabled={ isDisabled } title={ isDisabled ? 'Review cannot be empty!' : null }>
      { children }
    </button >
  );
}

export default Button;
