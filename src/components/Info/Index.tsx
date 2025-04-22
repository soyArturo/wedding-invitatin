const Info = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-10">
      <div className="flex flex-col justify-center items-center w-full">
        <img src="https://img.icons8.com/carbon-copy/100/null/wedding-rings.png" />
        <p className="text-4xl font-bold">Ceremonia</p>
        <div className="text-white text-xl bg-guinda px-8 py-2 rounded-lg mt-3">
          7:00 pm
        </div>
        <p className="text-xl text-center px-3 mt-3 font-semibold">
          Las puertas se abrirán a las 6:00 pm, por favor llegar con tiempo.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="https://img.icons8.com/carbon-copy/100/null/champagne.png" />
        <p className="text-4xl font-bold">Recepcion</p>
        <div className="text-white text-xl bg-guinda px-8 py-2 rounded-lg mt-3">
          8:00 pm
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-3">
        <p className="text-2xl">Muscari salon de eventos</p>
        <p className="text-lg text-center">
          C. Ensenada 2462, Lomas Del Pacifico, 22614
        </p>
        <a
          href="https://maps.app.goo.gl/uRKzDqeD96tEF2FC7"
          target="_blank"
          className="text-white text-xl bg-black px-8 py-2 rounded-lg mt-3"
        >
          Ver ubicacion
        </a>
      </div>
    </div>
  );
};

export default Info;
