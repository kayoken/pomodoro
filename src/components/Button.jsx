const Button = ({ children, disabled, onClick, active }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn ${active ? "active" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
