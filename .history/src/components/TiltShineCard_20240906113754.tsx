import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
} from "framer-motion";
import mePhoto from '../assets/img/self.jpeg'; // Import the image
import Ping from "./Ping";

const ROTATION_RANGE = 35;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
const PERSPECTIVE = "1500px";

export const TiltShineCard = () => {
  return (
    <div className="relative h-[500px]">
      <TiltShine />
    </div>
  );
};

const TiltShine = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
{
  /*
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const sheenOpacity = useTransform(
    ySpring,
    [-HALF_ROTATION_RANGE, 0, HALF_ROTATION_RANGE],
    [0.5, 0, 0.5],
  );
  */
}

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{
        perspective: PERSPECTIVE,
      }}
      className="absolute inset-0 grid place-content-center overflow-visible"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: "", // Your transform logic here
          backgroundImage: `url(${mePhoto})`,
          backgroundSize: "150%",
          backgroundPosition: "center",
        }}
        className="group relative aspect-[9/13] w-64 overflow-hidden bg-zinc-950 shadow-2xl shadow-zinc-950"
      >
        <motion.div
          style={{
            opacity: 0, // Your sheenOpacity logic here
          }}
          className="absolute inset-0 bg-gradient-to-br from-zinc-300/50 via-zinc-300 to-zinc-300/50"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button className="rounded-md w-48 bg-violet-600 px-4 py-2 text-md font-semibold text-white hover:bg-violet-400">
            <a href='https://drive.proton.me/urls/07X8DKE1KM#Jjmfoj2nl5qm' target='_blank' rel='noopener noreferrer'>
            Download My Resumé</a>
          </button>
        </div>
        <div className="absolute bottom-0 h-24 w-fit content-center rounded-r-xl p-2 text-center">
          <Ping />
        </div>
      </motion.div>
    </div>
  );
};
