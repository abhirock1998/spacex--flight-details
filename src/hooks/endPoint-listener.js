import { useEffect, useState } from "react";
import Axios from "axios";

const BaseURL = Axios.create({
  baseURL: "https://api.spacexdata.com/v3/launches",
});

export const UseSpaceXListener = (endPoint) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      return await BaseURL.get(endPoint)
        .then((e) => {
          console.log("response", e.data);
          setList(e.data);
        })
        .catch((e) => console.log("Error", e));
    };
    fetch();
  }, [endPoint]);
  return list;
};
//https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014
