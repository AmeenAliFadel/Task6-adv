import { createContext, useState, useEffect, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
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
    const [themeReady, setThemeReady] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
        setThemeReady(true);
    }, []);

    useEffect(() => {
        if (!themeReady) return;

        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark, themeReady]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const toggleDark = () => setIsDark(prev => !prev);

    const themeContextValue = useMemo(() => ({ isDark, toggleDark }), [isDark]);

    const hideFooterPaths = ['/about', '/projects'];
    const shouldHideFooter = hideFooterPaths.includes(location.pathname);

    return (
        <>
            {loading || !themeReady ? (
                <div className="flex justify-center items-center h-screen bg-white dark:bg-color2">
                    <CircleLoader color="#026AA2" size={80} />
                </div>
            ) : (
                <ThemeContext.Provider value={themeContextValue}>
                    <div className='bg-white dark:bg-color2'>
                        <div className="px-8 md:px-20">
                            <Navbar />
                            <Outlet />
                            {!shouldHideFooter && <Footer />}
                        </div>
                    </div>
                    <ScrollToTop />
                </ThemeContext.Provider>
            )}
        </>
    );
}
