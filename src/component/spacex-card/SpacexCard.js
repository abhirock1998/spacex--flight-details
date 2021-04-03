import React from "react";

import "./spacex-card.css";
function SpacexCard({
  src,
  MissionId = [],
  isLandingSuccess,
  isLaunchSuccess,
  year,
  flightNumber,
  missionName,
  time,
}) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={src} alt="space-card" />
      </div>
      <div className="card__details">
        <h1>
          {missionName} # {flightNumber}
        </h1>
        <div className="card__mission">
          <h2>Mission IDs</h2>
          {MissionId?.map((id, index) => (
            <span className="bread" key={index}>
              ⚆ {id}
            </span>
          ))}
        </div>
        <h2>
          Launch Year : <span>{year}</span>
        </h2>
        <h2>
          Launch Time : <span>{time}</span>
        </h2>
        <h2>
          Successful Launch : <span>{isLaunchSuccess}</span>
        </h2>
        <h2>
          Successful Landing : <span>{isLandingSuccess}</span>
        </h2>
      </div>
    </div>
  );
}

export default SpacexCard;
