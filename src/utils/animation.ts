import { Variants } from "framer-motion";

export const PageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [1, 1],
    y: ["-100%", "0%", "100%"],
  },
};
