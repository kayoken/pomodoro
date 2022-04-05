const calculateTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const finalSeconds = seconds % 60;

  const remainingSeconds = Math.floor(seconds % 3600);
  const minutes = Math.floor(remainingSeconds / 60);

  return formatTime(hours, minutes, finalSeconds);
};

const formatTime = (hours, minutes, seconds) => {
  const format = (timePiece) => {
    if (timePiece < 9) {
      return `0${timePiece}`;
    }
    return timePiece;
  };

  return format(hours) + ":" + format(minutes) + ":" + format(seconds);
};

export { calculateTime, formatTime };
