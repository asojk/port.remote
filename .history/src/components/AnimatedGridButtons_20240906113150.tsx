import React, { useState, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { DragCloseDrawerExample } from "./Modal.tsx";
import HugeiconsBriefcase01 from "~icons/hugeicons/briefcase-01";
import HugeiconsAbsolute from "~icons/hugeicons/absolute";
import HugeiconsAlignBoxTopLeft from "~icons/hugeicons/align-box-top-left";
import HugeiconsAddTeam from "~icons/hugeicons/add-team";
import HugeiconsAnonymous from "~icons/hugeicons/anonymous";
import HugeiconsArchive01 from "~icons/hugeicons/archive01";
import { ProjectsAndAchievementsContent } from "./content/Projects.tsx";
import { GreetingContent } from "./content/About.tsx";
import { SkillsContent } from "./content/Skills.tsx";
import { EducationContent } from "./content/Education.tsx";
import { ContactContent } from "./content/Contact.tsx";
import { WorkExperienceContent } from "./content/Experience.tsx";


const SPRING_OPTIONS = {
  mass: 1.5,
  stiffness: 500,
  damping: 100,
};

const AnimatedGridButtons = () => {
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalContent(null);
    }, 100); // Adjust the delay to match the modal closing animation
  };

  return (
    <div className="mx-auto max-w-screen p-0 text-primary-content md:max-w-3xl md:p-4">
      <div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-3">
        <AnimatedButton
          title="About"
          icon={<HugeiconsAnonymous />}
          onClick={() => openModal(<GreetingContent />)}
          isModalOpen={isModalOpen}
        />
        <AnimatedButton
          title="Skills"
          icon={<HugeiconsAbsolute />}
          onClick={() => openModal(<SkillsContent />)}
          isModalOpen={isModalOpen}
        />
        <AnimatedButton
          title="Education"
          icon={<HugeiconsArchive01 />}
          onClick={() => openModal(<EducationContent />)}
          isModalOpen={isModalOpen}
        />
        <AnimatedButton
          title="Roles"
          icon={<HugeiconsBriefcase01 />}
          onClick={() => openModal(<WorkExperienceContent />)}
          isModalOpen={isModalOpen}
        />
        <AnimatedButton
          title="Projects"
          icon={<HugeiconsAlignBoxTopLeft />}
          onClick={() => openModal(<ProjectsAndAchievementsContent />)}
          isModalOpen={isModalOpen}
        />
        <AnimatedButton
          title="Contact"
          icon={<HugeiconsAddTeam />}
          onClick={() => openModal(<ContactContent />)}
          isModalOpen={isModalOpen}
        />
      </div>
      {modalContent && (
        <DragCloseDrawerExample onClose={closeModal} open={isModalOpen}>
          {modalContent}
        </DragCloseDrawerExample>
      )}
    </div>
  );
};

interface AnimatedButtonProps {
  title: string;
  onClick: () => void;
  icon: React.ReactNode;
  isModalOpen: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  title,
  onClick,
  icon,
}) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, SPRING_OPTIONS);
  const ySpring = useSpring(y, SPRING_OPTIONS);

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!ref.current) return;

    const { height, width } = ref.current.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;

    const xPct = offsetX / width;
    const yPct = 1 - offsetY / height;

    const newY = 12 + yPct * 12;
    const newX = 12 + xPct * 12;

    x.set(newX);
    y.set(-newY);
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black"></div>
      <motion.button
        ref={ref}
        style={{
          transform,
        }}
        onMouseMove={handleMove}
        onMouseLeave={handleReset}
        onMouseDown={handleReset}
        onClick={onClick}
        className="group relative flex h-32 w-full items-center border-[1.5px] border-copy-light bg-primary-light md:px-8 text-xl font-semibold hover:bg-error-content"
      >
        <Icon icon={icon} />
        <h2 className="relative z-10 text-xl font-medium md:text-2xl md:font-bold leading-tight transition-all duration-500 group-hover:-translate-y-2 group-hover:text-primary-light">
          {title}
        </h2>
      </motion.button>
    </div>
  );
};

const Icon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="duration-[400ms] relative z-10 px-2 text-2xl text-primary-content transition-all group-hover:text-4xl group-hover:text-primary-light">
      {icon}
    </div>
  );
};

{
  /* const Copy = ({ children }: { children: string }) => {
  return (
    <span className="relative overflow-hidden">
      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );
  };
  */
}

export default AnimatedGridButtons;
