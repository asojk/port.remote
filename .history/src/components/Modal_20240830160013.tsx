import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HugeiconsCancelSquare from "~icons/hugeicons/cancel-square";

interface DragCloseDrawerExampleProps {
  onClose: () => void;
  children: ReactNode;
  open: boolean;
}

export const DragCloseDrawerExample = ({
  onClose,
  children,
  open,
}: DragCloseDrawerExampleProps) => {
  return (
    <div className="grid h-10 place-content-center bg-neutral-950/0">
      <DragCloseDrawer open={open} onClose={onClose}>
        {children}
      </DragCloseDrawer>
    </div>
  );
};

interface Props {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const DragCloseDrawer = ({ open, onClose, children }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center bg-neutral-950/70 p-12 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative cursor-default rounded-lg bg-neutral-900 p-4 text-white shadow-xl max-h-[80vh] w-full max-w-5xl overflow-auto"  // Ensure the modal has a max height and overflow handling
          >
            <div className="relative z-10">
              <div className="absolute left-0 top-0 z-10 flex justify-center p-4">
                <button
                  onClick={onClose}
                  className="w-12 rounded-2xl bg-neutral-900 text-center"
                >
                  <HugeiconsCancelSquare className="cursor-pointer text-4xl text-primary-dark hover:text-primary" />
                </button>
              </div>
              <div className="scrollbar-thin scrollbar-thumb-primary-dark overflow-y-clip scrollbar-track-success-content relative z-0 w-full p-2 pt-12">
                {children}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
