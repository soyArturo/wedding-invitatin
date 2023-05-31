import { ParallaxBanner } from "react-scroll-parallax";

const Quote = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: "https://i.ibb.co/j3Jb0F8/IMG-3521.jpg",
          scale: [1, 1],
          speed: -20,
          className: "object-cover object-center h-screen",
        },
        {
          speed: -30,
          children: (
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <div className="flex flex-col justify-center items-center text-4xl text-white px-3 text-center">
                <p>Por ti baby, seria Batman</p>
                <p className="text-xl">(Shrek 2, 2004)</p>
              </div>
            </div>
          ),
        },
      ]}
      className="h-screen"
    />
  );
};

export default Quote;
