import { calculateTime } from "../utils/utils";

const Timer = ({ seconds }) => {
  return <div className="timer current-time">{calculateTime(seconds)}</div>;
};

export default Timer;
