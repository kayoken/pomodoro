const Button = ({ children, onClick, timerActive }) => {
  return (
    <button onClick={onClick} className={`btn ${timerActive ? "active" : ""}`}>
      {children}
    </button>
  );
};

export default Button;
