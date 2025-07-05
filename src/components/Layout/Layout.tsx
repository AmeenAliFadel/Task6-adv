import { createContext, useState, useEffect, useMemo } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';

export const ThemeContext = createContext({
    isDark: false,
    toggleDark: () => { },
});

export default function Layout() {
    const [isDark, setIsDark] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const toggleDark = () => setIsDark(prev => !prev);

    const themeContextValue = useMemo(() => ({ isDark, toggleDark }), [isDark]);

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen bg-white dark:bg-color2">
                    <CircleLoader color="#090D1F" size={80} />
                </div>
            ) : (
                <>
                    
                    <ThemeContext.Provider value={themeContextValue}>
                        <div className='bg-white dark:bg-color2'>
                            <div className="px-8 md:px-20">
                                <Navbar />
                                <Outlet />
                                <Footer />
                            </div>
                        </div>
                    </ThemeContext.Provider>
                    <ScrollToTop />
                </>
            )}
        </>
    );
}
