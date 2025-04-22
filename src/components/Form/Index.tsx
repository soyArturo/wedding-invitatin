import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [brideButton, setBrideButton] = useState(false);
  const [groomButton, setGroomButton] = useState(false);

  const sendWhatsapp = (type: string) => {
    const brideNumber = "+526641931384";
    const groomNumber = "+526644276528";
    let message = `Hola, soy ${name} y confirmo mi asistencia!`;
    if (type === "bride") {
      setGroomButton(false);
      message = `Hola Izzuy, soy ${name} y confirmo mi asistencia!`;
      window.open(`https://wa.me/${brideNumber}?text=${message}`);
    } else {
      setBrideButton(false);
      message = `Hola Marcos, soy ${name} y confirmo mi asistencia!`;
      window.open(`https://wa.me/${groomNumber}?text=${message}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full py-10">
      <p className="text-3xl px-3 text-center font-bold">
        Confirma tu asistencia!🍻
      </p>
      <p className="text-lg px-3 text-center font-semibold">
        Queremos saber si podrás acompañarnos en este día tan especial.
        <br />
        Por favor confirma tu asistencia antes del 3 de Mayo.
      </p>
      <form action="" method="post" className="mt-3 w-full px-3">
        <div className="w-full">
          <label
            htmlFor="full-name"
            className="block text-2xl font-medium leading-6 text-gray-900"
          >
            Nombre completo
          </label>
          <div className="mt-2 w-full">
            <input
              type="text"
              name="full-name"
              id="full-name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="block w-full rounded-md border border-black p-1.5 text-black shadow-sm"
            />
          </div>
        </div>
        <div className="mt-3 flex flex-col space-y-3 justify-center items-center">
          <button
            type="button"
            id="bride-button"
            onClick={() => sendWhatsapp("bride")}
            disabled={brideButton || !name}
            className="w-full rounded-md bg-guinda px-3 py-2 text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 disabled:opacity-50"
          >
            Enviar a novia
          </button>

          <button
            type="button"
            id="groom-button"
            onClick={() => sendWhatsapp("groom")}
            disabled={groomButton || !name}
            className="w-full rounded-md bg-black px-3 py-2 text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500n disabled:opacity-50"
          >
            Enviar a novio
          </button>
          <div className="flex justify-center items-center text-sm text-center w-full px-3 mt-2">
            <p>
              Aunque nos gustan los niños, esta sera una celebración solo para
              adultos
            </p>
          </div>
        </div>
      </form>
      <p className="mt-10 text-2xl font-bold">Código de vestimenta:</p>
      <p className="text-xl">Etiqueta rigurosa</p>
      <p className="text-lg">
        Total <span className="font-[1000] text-xl">BLACK</span>
      </p>
      <div className="flex justify-center items-center">
        <img src="https://img.icons8.com/carbon-copy/100/suit.png" alt="suit" />
        <img
          src="https://img.icons8.com/carbon-copy/100/dress-front-view.png"
          alt="dress-front-view"
        />
      </div>
      <div className="flex flex-col space-y-3">
        <p className="text-xl">Favor de omitir los siguientes colores:</p>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col space-y-1 justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-white border border-black"></div>
            <p>Blanco</p>
          </div>
          <div className="flex flex-col space-y-1 justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <p>Gris</p>
          </div>
          <div className="flex flex-col space-y-1 justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-gray-700"></div>
            <p>Gris oscuro</p>
          </div>
          <div className="flex flex-col space-y-1 justify-center items-center">
            <div className="w-10 h-10 rounded-full bg-pink-950"></div>
            <p>Guinda</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
