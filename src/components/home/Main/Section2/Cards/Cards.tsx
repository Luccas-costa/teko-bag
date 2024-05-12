"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps {
  image: string;
  title: string;
  titleaposbr?: string;
  description: string;
  descriptionaposbr?: string;
}

export default function Cards({
  image,
  title,
  titleaposbr,
  description,
  descriptionaposbr,
}: CardProps) {
  const iftbr = titleaposbr ? true : false;
  const ifdbr = descriptionaposbr ? true : false;

  return (
    <>
      <motion.div
        className='bg-black flex flex-col rounded-lg w-[500px] sm:h-[600px] h-max-[550px]'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={image}
          alt='bags imagem'
          width={500}
          height={500}
          className='rounded-t-lg'
        />
        <div className='text-white text-3xl font-semibold text-center pt-16 pb-16 pl-2 pr-2'>
          {title}
          {iftbr && (
            <>
              <br />
              {titleaposbr}
            </>
          )}
          <div className='text-zinc-300 mt-2 text-xl'>
            {description}
            {ifdbr && (
              <>
                <br />
                {descriptionaposbr}
              </>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}
