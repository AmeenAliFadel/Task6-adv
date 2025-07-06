import { CiAlarmOn } from "react-icons/ci";

export default function PageNotFound() {
    return (
        <div className="flex flex-col justify-center items-center min-h-[100vh] bg-white dark:bg-color2">
            <div className="relative">
                <div className="w-20 h-20 border-4 border-dashed border-color3 rounded-full animate-spin"></div>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-color3 font-semibold">
                    <CiAlarmOn  className=" text-3xl" />
                </span>
            </div>
            <p className="mt-4 text-lg text-color1 dark:text-white animate-pulse">
                This page is currently under development
            </p>
        </div>
    )
}
