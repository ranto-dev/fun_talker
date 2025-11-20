import { useState, useEffect } from "react";
import { ChatContainer } from "./components/ ChatContainer";
import { motion } from "framer-motion";
import ChatLoading from "./components/ChatLoading";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading === true) {
    return <ChatLoading />;
  }

  return (
    <div className="bg-neutral-900 w-full h-screen p-8 flex justify-center overflow-hidden ">
      {/*
       * left emojie illustration
       */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.2,
        }}
        className="absolute top-20 left-1 w-[25%] text-center hidden lg:block"
      >
        <p className="text-[4rem]">🤪</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.2,
        }}
        className="absolute top-1/2 lg:left-20 xl:left-52 w-[25%] text-center hidden lg:block"
      >
        <p className="text-4xl">🫣</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.2,
        }}
        className="absolute bottom-5 left-0 w-[25%] text-center hidden lg:block"
      >
        <p className="text-[7rem]">😎</p>
      </motion.div>

      {/*
       * right emojie illustration
       */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.2,
        }}
        className="absolute top-42 right-26 xl:right-36 w-[25%] text-center  hidden lg:block"
      >
        <p className="text-[5rem]">🤔</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.2,
        }}
        className="absolute bottom-20 right-2 w-[25%] text-center hidden lg:block"
      >
        <p className="text-[7rem]">😆</p>
      </motion.div>
      <ChatContainer />
    </div>
  );
};

export default App;
