import React from "react";
import { useDatalayerValue } from "../../context/data-layer";
import { ButtonsGrid } from "../fixture/btns";
import "./filter.css";
function Filter() {
  const [, dispatch] = useDatalayerValue();
  const handleFilter = (year) => {
    dispatch({
      type: "SET_FILTER",
      filter: true,
    });

    dispatch({
      type: "SET_YEAR",
      year: year,
    });
  };

  const handleLaunch = (e) => {
    dispatch({
      type: "SET_FILTER",
      filter: true,
    });
    const { name } = e.target;
    if (name === "false") {
      dispatch({
        type: "SET_LAUNCH",
        value: false,
      });
    } else {
      dispatch({
        type: "SET_LAUNCH",
        value: true,
      });
    }
  };
  const handleLanding = (e) => {
    dispatch({
      type: "SET_FILTER",
      filter: true,
    });
    const { name } = e.target;
    if (name === "false") {
      dispatch({
        type: "SET_LANDING",
        value: false,
      });
    } else {
      dispatch({
        type: "SET_LANDING",
        value: true,
      });
    }
  };
  React.useEffect(() => {
    var btns = document.querySelectorAll(".filter__yearBtn");
    btns[0].childNodes.forEach((btn, index) => {
      if (index === 0) {
        btn.classList.add("active");
      }
      btn.addEventListener("click", () => {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        btn.classList.add("active");
      });
    });
  }, []);

  return (
    <div className="filter">
      <h1>Filter</h1>
      <h3>Launch Year</h3>
      <hr />
      <div className="filter__yearBtn">
        {ButtonsGrid.map((value) => (
          <button onClick={() => handleFilter(value)} key={value}>
            {value}
          </button>
        ))}
      </div>
      <h3>Successfull Launch</h3>
      <hr />
      <div className="filter__yearBtn">
        <button onClick={handleLaunch} name="true">
          True
        </button>
        <button onClick={handleLaunch} name="false">
          False
        </button>
      </div>
      <h3>Successfull landing</h3>
      <hr />
      <div className="filter__yearBtn">
        <button name="true" onClick={handleLanding}>
          True
        </button>
        <button name="false" onClick={handleLanding}>
          False
        </button>
      </div>
    </div>
  );
}

export default Filter;
