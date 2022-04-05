const Button = ({ children, onClick, active }) => {
  return (
    <button onClick={onClick} className={`btn ${active ? "active" : ""}`}>
      {children}
    </button>
  );
};

export default Button;
