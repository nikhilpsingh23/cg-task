import React from "react";
function Clock() {
  let time = new Date();
  return (
    <div>
      <p className="lead">
        This is the clock that shows the time in bharat at all times
      </p>
      <p>
        This is the current times:- {time.toLocaleDateString()}-
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}
export default Clock;
