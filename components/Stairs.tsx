import { motion } from "framer-motion";

const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
//clac delay
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};
function Stairs() {
  return (
    <>
      {/*render 6 motion div*/}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairsAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="w-full h-full bg-white relative"
          />
        );
      })}
    </>
  );
}

export default Stairs;
