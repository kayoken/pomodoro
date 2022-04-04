const Button = ({ children, onClick, timerActive }) => {
  const active = "active";

  return (
    <button onClick={onClick} className={`btn ${timerActive ? active : ""}`}>
      {children}
    </button>
  );
};

export default Button;
