import { createContext, useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import SplashCursor from '../Cursor/SplashCursor';

export const ThemeContext = createContext({
    isDark: false,
    toggleDark: () => { },
});

export default function Layout() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleDark = () => setIsDark(prev => !prev);

    return (
        <>
            <SplashCursor />
            <ThemeContext.Provider value={{ isDark, toggleDark }}>
                <div className='bg-white dark:bg-color2'>
                    <div className=" lg:w-[84.44%] w-[100%] mx-auto">
                        <Navbar />
                        <Outlet />
                    </div>
                </div>

            </ThemeContext.Provider>
        </>

    );
}
