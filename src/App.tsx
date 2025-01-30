import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { ParallaxBanner } from "react-scroll-parallax";
import Countdown from "./components/Countdown/Index";
import Form from "./components/Form/Index";
import Info from "./components/Info/Index";
import Quote from "./components/Quote/Index";
import MainScreen from "./screens/MainScreen";

const App = () => {
  // if (!isMobile) {
  //   return (
  //     <div className="flex h-screen justify-center items-center">
  //       <p className="text-4xl">
  //         Perdon, esta pagina solo esta disponible para moviles :(
  //       </p>
  //     </div>
  //   );
  // }
  return (
    <>
      <MainScreen />
      {/* <Countdown
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      <Info />
      <Quote />
      <Form />
      <ParallaxBanner
        layers={[
          {
            image: "https://picsum.photos/1600/1600/?random&blur",
            speed: -20,
            className: "object-scale-down object-center h-screen",
          },
        ]}
        className="h-screen bg-black"
      /> */}
    </>
  );
};

export default App;
