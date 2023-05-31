import { ParallaxBanner } from "react-scroll-parallax";

interface CountdownProps {
  timerDays: any;
  timerHours: any;
  timerMinutes: any;
  timerSeconds: any;
}

const Countdown = ({
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds,
}: CountdownProps) => {
  return (
    <ParallaxBanner
      layers={[
        {
          image:
            "https://i.ibb.co/W3GMpCC/IMG-3537.jpg",
          speed: -20,
        },
        {
          speed: -30,
          children: (
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <div className="flex flex-col items-center">
                <h1 className="text-6xl text-white">Alondra</h1>
                <h2 className="text-4xl text-white">&</h2>
                <h1 className="text-6xl text-white">Arturo</h1>
              </div>
              <div className="text-4xl text-white">Sabado 1 de Julio</div>
              <div className="text-4xl text-center flex w-full items-center justify-center">
                <div className="w-24 mx-1 p-2 text-white rounded-lg">
                  <div className="leading-none">
                    {timerDays < 10 ? `0${timerDays}` : timerDays}
                  </div>
                  <div className="uppercase text-sm leading-none">
                    {timerDays < 2 ? "Dia" : "Dias"}
                  </div>
                </div>
                <div className="w-24 mx-1 p-2 text-white rounded-lg">
                  <div className="leading-none">
                    {timerHours < 10 ? `0${timerHours}` : timerHours}
                  </div>
                  <div className="uppercase text-sm leading-none">
                    {timerHours < 2 ? "Hora" : "Horas"}
                  </div>
                </div>
                <div className="w-24 mx-1 p-2 text-white rounded-lg">
                  <div className="leading-none">
                    {timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}
                  </div>
                  <div className="uppercase text-sm leading-none">
                    {timerMinutes < 2 ? "Minuto" : "Minutos"}
                  </div>
                </div>
                <div className="w-24 mx-1 p-2 text-white rounded-lg">
                  <div className="leading-none">
                    {timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
                  </div>
                  <div className="uppercase text-sm leading-none">
                    {timerSeconds < 2 ? "Segundo" : "Segundos"}
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ]}
      className="h-screen bg-cover bg-center bg-no-repeat"
    />
  );
};

export default Countdown;
