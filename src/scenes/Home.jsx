import {motion} from 'framer-motion';



export default function Home() {
  return (
    <motion.div initial={{x: "-100%"}} animate={{x: 0}} className="home-container">
      <motion.h1 transition={{duration: 1, repeat: Infinity, ease: "easeInOut" }} animate={{y:[0,8,0]}}>Home</motion.h1>
    </motion.div>
  );
}
