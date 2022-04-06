import React from "react";
import { Link } from "react-router-dom";
import { calculateTime } from "../utils/utils";

const Records = ({ records }) => {
  console.log(records);

  return (
    <div className="app-container records">
      {records.map((record) => (
        <div key={record.id}>
          <span className="date">{record.date}</span>:{" "}
          {calculateTime(record.seconds)}
        </div>
      ))}
      <Link className="link" to="/">
        Back
      </Link>
    </div>
  );
};

export default Records;
