import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { SiTiktok, } from "react-icons/si";



import ClarityPhoneHandsetSolid from '~icons/clarity/phone-handset-solid'
import ClarityEnvelopeSolid from '~icons/clarity/envelope-solid'

import Scrabble from '../assets/Scrabble.tsx'



export const RevealBento = () => {
  return (
    <div className="px-2 py-8 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-5xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />

      </motion.div>
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-primary-content bg-success-content p-6",
        className,
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-16 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
    Discuss a project?{" "}
      <span className="text-zinc-400">
      Or just want to say hi?
      </span>
    </h1>
    <a
      className="flex items-center gap-1 text-red-300"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a
        href="tel:+17634642656"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <ClarityPhoneHandsetSolid />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
        href="mailto:alexsojka@me.com"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <ClarityEnvelopeSolid />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="https://www.tiktok.com/@sojbo"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="https://s.scope.ly/vkH2YFvbt2k"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <Scrabble />
      </a>
    </Block>
  </>
);


{/*const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        btw{" "}
        <a href="#" className="text-red-300 hover:underline">
          ats
        </a>
      </p>
    </footer>
  );

};
  */}