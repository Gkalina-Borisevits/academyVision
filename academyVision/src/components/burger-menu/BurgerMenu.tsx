import React, { useState, useEffect, useRef } from 'react';
import styles from './StyleBurgerMenu.module.css'; // Импорт CSS для стилизации
import { NavLink } from 'react-router-dom';

const BurgerMenu: React.FC = () => {
    const [burgerClass, setBurgerClass] = useState<string>(styles.burgerBar + " " + styles.unclicked);
    const [menuClass, setMenuClass] = useState<string>(styles.menu + " " + styles.hidden);

    const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null); // Добавляем реф для всего меню

    const updateMenu = (): void => {
        setIsMenuClicked(!isMenuClicked);
        setBurgerClass(isMenuClicked ? styles.burgerBar + " " + styles.unclicked : styles.burgerBar + " " + styles.clicked);
        setMenuClass(isMenuClicked ? styles.menu + " " + styles.hidden : styles.menu + " " + styles.visible);

    };

    // Функция для закрытия меню
    const closeMenu = (): void => {
        setBurgerClass(styles.burgerBar + " " + styles.unclicked);
        setMenuClass(styles.menu + " " + styles.hidden);
        setIsMenuClicked(false);
    };

    // Обработка кликов вне компонента меню
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node) && isMenuClicked) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuClicked]); // Добавление isMenuClicked в зависимости useEffect

    return (
        <div ref={menuRef} className={styles.burgerSize}>
            <nav>
                <div className={styles.burgerMenu} onClick={updateMenu}>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                </div>
            </nav>
            <div className={menuClass}>
                <div className={styles.navBar}>
                    <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                    <NavLink to="/contacts" onClick={closeMenu}>Contacts</NavLink>
                    <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
                    <NavLink to="/price" onClick={closeMenu}>Price</NavLink>
                    <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
                </div>
            </div>
        </div>
    );
};


export default BurgerMenu