import { useEffect, useState } from "react";
import { IoMdArrowUp } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { throttle } from "lodash";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = throttle(() => {
            const shouldBeVisible = window.scrollY > 500;
            setIsVisible((prev) => {
                if (prev !== shouldBeVisible) {
                    return shouldBeVisible;
                }
                return prev; 
            });
        }, 200);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed z-[999] bottom-5 right-5 w-11 h-11 rounded-full bg-color2 text-white dark:bg-white  dark:text-color2 border-none text-2xl flex justify-center items-center transition-all duration-300 ${isVisible
                    ? "opacity-100 visible translate-x-0"
                    : "opacity-0 invisible translate-x-5"
                } md:w-10 md:h-10 md:text-xl md:bottom-4 md:right-4`}
        >
            <IoMdArrowUp />
        </button>
    );
}
