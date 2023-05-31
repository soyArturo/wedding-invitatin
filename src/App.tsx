import { useEffect, useState } from "react";
import Countdown from "./components/Countdown/Index";
import Info from "./components/Info/Index";
import Quote from "./components/Quote/Index";
import { isMobile } from "react-device-detect";
import Form from "./components/Form/Index";

const App = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval!: any;

  const startTimer = () => {
    const countDownDate = new Date("July 01 2023 17:00:00").getTime();

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


  if (!isMobile) {
    return (
      <div className="flex h-screen justify-center items-center">
        <p className="text-4xl">
          Perdon, esta pagina solo esta disponible para moviles :(
        </p>
      </div>
    );
  }
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
    </>
  );
};

export default App;
