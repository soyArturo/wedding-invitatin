const Info = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-10">
      <div className="flex flex-col justify-center items-center w-full">
        <img src="https://img.icons8.com/carbon-copy/100/null/wedding-rings.png" />
        <p className="text-4xl">Ceremonia</p>
        <div className="text-white text-xl bg-guinda px-8 py-2 rounded-lg mt-3">
          5:00 pm
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="https://img.icons8.com/carbon-copy/100/null/champagne.png" />
        <p className="text-4xl">Recepcion</p>
        <div className="text-white text-xl bg-guinda px-8 py-2 rounded-lg mt-3">
          6:00 pm
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-3">
        <p className="text-2xl">Jardín de eventos Praderas</p>
        <p className="text-lg text-center">
          Prol. de las Praderas 2770, Granjas Familiares del Matamoros, 22203
        </p>
        <a
          href="https://goo.gl/maps/QGd5sSGKGSvxYRnR6"
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
