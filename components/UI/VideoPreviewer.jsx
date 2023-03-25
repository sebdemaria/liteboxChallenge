import { PlayBtn } from "@/public/assets";
import Image from "next/image";

export const VideoPreviewer = ({ title, imgPath, index }) => {
    // set dynamic background image path
    const css = `
        #backgroundVideo${index} {
            background-image: url(${String(imgPath)});            
        }
    `;

    return (
        <div
            id={`backgroundVideo${index}`}
            className="bg-video-previewer-props flex flex-wrap content-center justify-center rounded-md px-3 pt-4 xs:h-[186px] xs:w-[90%] sm:w-[336px] lg:h-[146px] lg:w-[220px]"
        >
            <style>{css}</style>

            <Image src={PlayBtn} alt="play button" className="" />
            <h2 className="relative z-10 w-full pt-4 text-center font-oswald font-extralight uppercase tracking-superWide text-white-normal xs:text-[0.8rem]">
                {title}
            </h2>
        </div>
    );
};
