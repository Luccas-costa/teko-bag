import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AdmUsers, AdmUsersDados } from "@/lib/admEmail";
import { useUserEmail } from "@/hooks/useUserEmail";
import { motion } from "framer-motion";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import styles from "../CloseMenu/CloseMenu.module.css";

export default function MenuMobile() {
  const [Itmenuopen, setItmenuopen] = useState(false);
  const [divY, setDivY] = useState(0); // Estado para controlar a posição vertical da div
  const [borda, setBorda] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const userEmail = useUserEmail();

  const handlemenu = () => {
    setItmenuopen(!Itmenuopen);
  };

  const closeMenu = () => {
    setItmenuopen(false);
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  // Função para atualizar a posição vertical da div quando o link "#sobre" for clicado
  const handleSobreClick = () => {
    setDivY(48);
    setBorda(false);
    closeMenu();
  };

  // Função para atualizar a posição vertical da div quando o link "#footer" for clicado
  const handleFooterClick = () => {
    setDivY(96);
    setBorda(false);
    closeMenu();
  };

  const handleDashboardClick = () => {
    setDivY(144);
    setBorda(false);
    closeMenu();
  };

  const handleHomeClick = () => {
    setDivY(0);
    setBorda(true);
    closeMenu();
  };

  useEffect(() => {
    if (!Itmenuopen) {
      if (checkboxRef.current) {
        checkboxRef.current.checked = false;
      }
    }
  }, [Itmenuopen]);

  return (
    <>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode='modal'>
            <button className='uppercase bg-green1/50 rounded px-3 py-2 items-center font-bold active:bg-green3 shadow-xl'>
              Login
            </button>
          </SignInButton>
        </SignedOut>
      </div>

      <div className='items-center justify-center flex z-70'>
        <button>
          <label className={`${styles.hamburger}`} style={{ zIndex: 70 }}>
            <input type='checkbox' onClick={handlemenu} ref={checkboxRef} />
            <svg viewBox='0 0 32 32'>
              <path
                className={` ${styles.line} ${styles.linetopbottom}`}
                d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
              ></path>
              <path className={styles.line} d='M7 16 27 16'></path>
            </svg>
          </label>
        </button>
      </div>

      {Itmenuopen && (
        <motion.div
          className='absolute rounded-full top-0 left-0 w-[300%] h-[1590px] bg-green2'
          style={{ translateX: "-19%", translateY: "-48%", zIndex: -1 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className='flex items-center justify-center h-full'>
            {/* oque eu quiser por dentro */}
          </div>
        </motion.div>
      )}

      {Itmenuopen && (
        <motion.div
          className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-green2'
          style={{ zIndex: -1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className='flex flex-col items-center justify-center h-full mt-[100%]'>
            <button
              className='p-4 focus:outline-none text-white'
              onClick={handleHomeClick}
            >
              <a href='#inicio'>home</a>
            </button>
            <hr className='w-full h-3 bg-white border-white rounded' />
            <button
              className='p-4 focus:outline-none text-white'
              onClick={handleSobreClick}
            >
              <a href='#sobre'>sobre</a>
            </button>
            <hr className='w-full h-3 bg-white border-white rounded' />
            <button
              className='p-4 focus:outline-none text-white'
              onClick={handleFooterClick}
            >
              <a href='#footer'>contato</a>
            </button>
            {userEmail && AdmUsers.includes(userEmail) && (
              <>
                <hr className='w-full h-3 bg-white border-white rounded' />
                <Link href='/pages/dashboard' onClick={handleDashboardClick}>
                  <button className='p-4 focus:outline-none text-white'>
                    dashboard
                  </button>
                </Link>
              </>
            )}
            {userEmail && AdmUsersDados.includes(userEmail) && (
              <>
                <hr className='w-full h-3 bg-white border-white rounded' />
                <Link href='/pages/configpage' onClick={handleDashboardClick}>
                  <button className='p-4 focus:outline-none text-white'>
                    Configurações
                  </button>
                </Link>
              </>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
}
