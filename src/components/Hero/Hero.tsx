import BlurText from "../BlurText/BlurText";

export default function Hero({ text }: { text: string }) {
    return (
        <>
            <div className=" py-6 2xl:mt-[99px] md:mt-[100px] mt-[72px]  flex justify-center items-center text-center mx-auto border-t border-b border-[#00000057] dark:border-white ">
                <BlurText
                    text={text}
                    delay={250}
                    animateBy="words"
                    direction="top"
                    className="text-color1 dark:text-white mx-auto font-bold text-6xl md:text-[161px] xl:text-[228px] 2xl:text-[300px] !flex-nowrap"
                />
            </div>
        </>
    )
}

