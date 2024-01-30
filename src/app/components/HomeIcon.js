'use client';

import Image from "next/image";
import HomeImage from '../../../public/images/homeIcon.png';
import { Parallax } from 'react-scroll-parallax';

export default function HomeIcon(){
    return(
        <div className="fixed z-[3] top-0 left-[-145px] hover:left-[-120px] lg:left-[-295px] lg:hover:left-[-250px] ease-in duration-200 cursor-pointer">
            <Parallax opacity={[0, 1]} startScroll={650} endScroll={1000}>
            <Image
                src={HomeImage}
                width={300}
                alt="oops"
                className="rotate-90 w-[150px] h-auto lg:w-[300px]"
            />
            </Parallax>
        </div>
    )
}