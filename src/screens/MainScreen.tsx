import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import InvitationScreen from "./InvitationScreen";

const MainScreen = () => {
  const [isInvitationOpen, setInvitationOpen] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {isInvitationOpen ? (
        <motion.div
          key="info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <InvitationScreen />
        </motion.div>
      ) : (
        <motion.div
          key="countdown"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
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
            <p className="text-2xl text-white text-center px-3">
              Queridos amigos y familiares, nos vamos a casar y queremos que
              sean parte de este día tan especial para nosotros.
            </p>
            <div className="buttonContainer flex justify-center">
              <button
                onClick={() => setInvitationOpen(true)}
                className="px-8 py-5 bg-black text-white rounded-lg text-xl"
              >
                Abrir invitación
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MainScreen;
