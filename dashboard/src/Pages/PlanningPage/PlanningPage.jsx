import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const PlanningPage = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    getNewDate();
  }, []);

  function getNewDate() {
    let today = new Date(),
      date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
    setDate(date);
  }
  const now = Math.floor(Date.now() / 1000);
  console.log(now);
  return <div>{date}</div>;
};

export default PlanningPage;
