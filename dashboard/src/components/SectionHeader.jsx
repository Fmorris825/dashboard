import { useEffect, useState } from "react";

const SectionHeader = ({ header }) => {
  const [time, setTime] = useState("");
  const [hour, setHour] = useState(0);
  const [greeting, setGreeting] = useState("Good Morning");

  useEffect(() => {
    getHour();
    getNewTime();
  }, []);
  function getNewTime() {
    let today = new Date(),
      time = today.getHours() + ":" + today.getMinutes();
    setTime(time);
  }

  function getHour() {
    let today = new Date(),
      hour = today.getHours();
    setHour(hour);
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour >= 12 && hour < 16) {
      setGreeting("Good Afternoon");
    } else if (hour < 24) {
      setGreeting("Good Evening");
    }
  }
  console.log(hour);
  return (
    <>
      <h2>{greeting}, Fred</h2>
    </>
  );
};

export default SectionHeader;
