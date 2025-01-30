import { FaHeart } from "react-icons/fa6";

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
    <div>
      <div className="containerr space-y-4">
        <div className="separatorContainer">
          <div className="flex items-center justify-center p-2.5">
            <div className="bg-white w-80 max-xs:w-28 max-md:w-48 h-1.5 rounded-lg" />
            <FaHeart className="text-white text-3xl mx-2.5" />
            <div className="bg-white w-80 max-xs:w-28 max-md:w-48 h-1.5 rounded-lg" />
          </div>
          <p className="textName">Izzuy &amp; Marcos</p>
          <div className="flex items-center justify-center p-2.5">
            <div className="bg-white w-80 max-xs:w-28 max-md:w-48 h-1.5 rounded-lg" />
            <FaHeart className="text-white text-3xl mx-2.5" />
            <div className="bg-white w-80 max-xs:w-28 max-md:w-48 h-1.5 rounded-lg" />
          </div>
        </div>
        <p className="text-4xl text-white">Sabado 24 de Mayo</p>
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
    </div>
  );
};

export default Countdown;
