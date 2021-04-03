import React from "react";
import "./main-area.css";
import SpacexCard from "../spacex-card/SpacexCard";
import { UseSpaceXListener } from "../../hooks/endPoint-listener";
import { useDatalayerValue } from "../../context/data-layer";
export default function MainArea({ spaceXAll = [] }) {
  const [
    { year = 2020, launch = true, land = true, filter = false },
  ] = useDatalayerValue();

  const ListSpace = UseSpaceXListener(
    `?limit=100&launch_success=${launch}&land_success=${land}&launch_year=${year}`
  );

  if (ListSpace === undefined || ListSpace.length === 0) {
    return <div id="loader"></div>;
  }
  return (
    <div className="mainArea">
      {(filter === false || year === "All" ? spaceXAll : ListSpace)?.map(
        (
          {
            links,
            mission_id,
            mission_name,
            launch_year,
            launch_date_utc,
            launch_success,
            flight_number,
            rocket,
          },
          index
        ) => (
          <SpacexCard
            year={launch_year}
            isLaunchSuccess={launch_success === true ? "True" : "False"}
            src={links.mission_patch_small}
            missionName={mission_name}
            flightNumber={flight_number}
            MissionId={mission_id}
            key={index}
            time={new Date(launch_date_utc).toUTCString()}
            isLandingSuccess={
              filter === true
                ? land.toString() || rocket?.first_stage?.cores[0].land_success
                : ""
            }
          />
        )
      )}
    </div>
  );
}
