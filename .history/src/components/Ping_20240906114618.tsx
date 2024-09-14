import { motion } from "framer-motion";
import HugeiconsFileDownload from "~icons/hugeicons/file-download";

const LOOP_DURATION = 4;

const Ping = () => {
  return (
    <div className="relative">
      <Logo />
      <Band delay={5} />
      <Band delay={LOOP_DURATION * 2} />
      <Band delay={LOOP_DURATION * 2.25} />
      <Band delay={LOOP_DURATION * 2.5} />
    </div>
  );
};

const Logo = () => {
  return (
    <HugeiconsFileDownload className="relative z-10 text-5xl text-copy-lighter" />
  );
};
const Band = ({ delay }: { delay: number }) => {
  return (
    <motion.span
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{
        opacity: 0,
        scale: 0.125,
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: 0.75,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.5, 0.75, 1],
        duration: LOOP_DURATION,
        ease: "linear",
        delay,
      }}
      className="absolute left-[50%] top-[50%] z-0 h-40 w-40 rounded-full border-[1px] border-violet-500/75 bg-gradient-to-br from-violet-500/50 to-violet-800/20 shadow-xl shadow-violet-500/40"
    />
  );
};

export default Ping;
