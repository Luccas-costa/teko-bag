import { Variants } from "framer-motion";

// animação mais fluida e sem parar
export const PageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [1, 1],
    y: ["-100%", "100%"],
  },
};

// animação com parada
export const PageTransition2: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [1, 1],
    y: ["-100%", "0%", "0%", "100%"],
  },
};
