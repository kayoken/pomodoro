import React from "react";

const Records = ({ records }) => {
  return records.map((record) => <div key={record.date}>{record.seconds}</div>);
};

export default Records;
