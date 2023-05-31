import { useEffect, useState } from "react";

const useCountdown = (targetDate: number) => {
  console.log("1", targetDate);
  const countDownDate = new Date(targetDate).getTime();
  console.log("2", countDownDate);
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  console.log("3", countDown);
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  console.log("4", days);
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  console.log("5", hours);
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  console.log("6", minutes);
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  console.log("7", seconds);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
