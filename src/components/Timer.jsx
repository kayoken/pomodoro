const Timer = ({ seconds }) => {
  const buildString = () => {
    const hours = Math.floor(seconds / 3600);
    const finalSeconds = seconds % 60;

    const remainingSeconds = Math.floor(seconds % 3600);
    const minutes = Math.floor(remainingSeconds / 60);

    return `${hours + ":" + minutes + ":" + finalSeconds}`;
  };

  return <div className="timer current-time">{buildString()}</div>;
};

export default Timer;
