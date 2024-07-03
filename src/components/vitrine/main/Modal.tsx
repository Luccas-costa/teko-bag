import { X } from "@phosphor-icons/react/dist/ssr";
import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 w-full h-full'
      onClick={onClose}
    >
      <div
        className='bg-zinc-400/50 2xl:w-[40%] dash9:h-[85%] dash9_5:h-[90%] dash10:h-[90%] dash10_5:h-[95%] dash11:h-[95%] h-[97%] xl:w-[50%] lg:w-[60%] md:w-[70%] sm:w-[78%] w-[85%] p-4 backdrop-blur-xl overflow-hidden rounded cursor-pointer relative'
        onClick={(e) => e.stopPropagation()}
      >
        <X
          size={30}
          weight='bold'
          className='cursor-pointer absolute top-1 right-1'
          color='rgb(161 161 170 / 0.8)'
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
