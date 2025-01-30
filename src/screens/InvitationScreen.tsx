import { useEffect, useState } from "react";
import Countdown from "../components/Countdown/Index";
import Form from "../components/Form/Index";
import Info from "../components/Info/Index";
import Quote from "../components/Quote/Index";

const InvitationScreen = () => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval!: any;

  const startTimer = () => {
    const countDownDate = new Date("2025-05-24T23:59:59").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <>
      <Countdown
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      <Info />
      <Quote />
      <Form />
      <div className="containerr space-y-4" />
    </>
  );
};
export default InvitationScreen;
