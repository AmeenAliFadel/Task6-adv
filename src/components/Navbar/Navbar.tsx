import { useState, useEffect, useContext } from "react";
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import menu from '../../assets/menu-outline.svg';
import esc from '../../assets/esc.svg';
import escDark from '../../assets/esc-dark.svg';
import menuDark from '../../assets/menu-dark.svg';
import { ThemeContext } from '../Layout/Layout';
import { NavLink } from "react-router-dom";

function NavLinks({ onLinkClick }: { onLinkClick?: () => void }) {
    const links = [
        { name: 'Blog', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Newsletter', path: '/newsletter' }
    ];

    return (
        <ul className="flex flex-col md:flex-row gap-8 list-none m-0 p-0 text-center">
            {links.map(link => (
                <li key={link.name} onClick={onLinkClick}>
                    <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                            `cursor-pointer text-lg lg:text-xl transition hover:text-gray-500 
                            ${isActive ? 'font-semibold text-color2 border-b-2 dark:text-white pb-0.5' : ''}`
                        }
                    >
                        {link.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}


function DarkModeToggle() {
    const { isDark, toggleDark } = useContext(ThemeContext);
    return (
        <div
            onClick={toggleDark}
            className={`w-28 h-12 flex items-center justify-between rounded-full px-6 py-3 cursor-pointer transition-colors duration-300 relative
            ${isDark ? 'bg-white' : 'bg-color2'}`}
        >
            <div
                className={`w-7 h-7 mt-[-1px] rounded-full shadow-md absolute top-3 left-2 transform transition-transform duration-300
                ${isDark ? 'translate-x-[10px] bg-color2' : 'translate-x-[60px] bg-white'}`}
            />

            <img
                src={sun}
                alt="sun"
                className={`w-6 h-6 transition-opacity duration-300 z-10
            ${isDark ? 'opacity-0' : 'opacity-100'}`}
            />

            <img
                src={moon}
                alt="moon"
                className={`w-6 h-6 transition-opacity duration-300 z-10
            ${isDark ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
}

export default function Navbar() {
    const { isDark } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
    }, [isMenuOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-color2 text-black dark:text-white h-[72px]  md:h-[100px]">
            <div className="flex justify-between items-center w-[95.20%] lg:w-[84.44%] mx-auto pt-6 md:pt-7 lg:pt-[30px] pb-5 md:pb-[30px] lg:pb-[50px] text-color1  dark:text-white">

                <h2 className="font-semibold text-lg lg:text-xl">Your Name</h2>

                <div className="hidden md:flex items-center gap-8">
                    <NavLinks />
                    <DarkModeToggle />
                </div>

                {!isMenuOpen && (
                    <button
                        className="md:hidden flex flex-col justify-center w-6 h-6 cursor-pointer z-50"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Toggle menu"
                    >
                        <img src={isDark ? menuDark : menu} alt="Menu" />
                    </button>
                )}

            </div>

            <div
                className={`fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 flex flex-col items-center justify-center gap-8 z-40
                transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
            >
                <NavLinks onLinkClick={() => setIsMenuOpen(false)} />
                <DarkModeToggle />

                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 
                    rounded-full flex items-center justify-center text-black dark:text-white text-3xl font-bold transition"
                    aria-label="Close menu"
                >
                    <img src={isDark ? escDark : esc} alt="Close" />
                </button>
            </div>
        </nav>
    );
}
