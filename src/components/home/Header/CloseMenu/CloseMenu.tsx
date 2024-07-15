import React from 'react';
import styles from "./CloseMenu.module.css";

interface CloseMenuProps {
    teste: boolean;
    onClick: () => void;
    onClick2: () => void;
}

export default function CloseMenu({ onClick, onClick2, teste }: CloseMenuProps) {
    console.log("CloseMenu props:", { onClick, onClick2, teste });

    const handleClick = () => {
        if (teste) {
            onClick2();
        } else {
            onClick();
        }
    };
    
    return (
        <label className={styles.hamburger} onClick={handleClick}>    
            <input type="checkbox" />
            {teste && ("teste")}
            <svg viewBox="0 0 32 32"> 
                <path className={` ${styles.line} ${styles.linetopbottom}`} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path className={styles.line} d="M7 16 27 16"></path>
            </svg>
        </label>
    );
}
