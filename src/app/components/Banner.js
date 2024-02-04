'use client';

import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import MeFr from '../../../public/images/realPhoto.jpg';
import { useState, useEffect } from 'react';
import Motto from '../../../public/images/motto.png';

export default function Banner(){
    const [width, setWidth] = useState(0);

    useEffect(()=>{
        setWidth(window.innerWidth);
    }, [])
   
    return(
        <div className='absolute flex w-[125%]'>
            
                    <section className="flex animate-[swipe_5s_linear_infinite_backwards] relative z-[1]">
                        <Image
                        className="px-[15px]"
                            src={Motto}
                            width={250}
                            alt="oops"
                        />
                            <Image
                            className="px-[15px]"
                            src={Motto}
                            width={250}
                            alt="oops"
                        />
                            <Image
                            className="px-[15px] hidden 2xl:block"
                            src={Motto}
                            width={250}
                            alt="oops"
                        />

                            
                    </section>
                    {width <= 1024 ? 
            <div className='hidden'></div> :
        <section className="flex animate-[swipe_5s_linear_infinite_backwards] relative z-[1]">
        <Image
        className="px-[15px]"
            src={Motto}
            width={250}
            alt="oops"
        />
            <Image
            className="px-[15px]"
            src={Motto}
            width={250}
            alt="oops"
        />
            <Image
            className="px-[15px] hidden 2xl:block"
            src={Motto}
            width={250}
            alt="oops"
        />
            

    </section>
        }
                        
                    
                    
                    <section className="flex animate-[swipe_5s_linear_infinite_backwards] relative z-[1]">
                        <Image
                        className="px-[15px]"
                            src={Motto}
                            width={250}
                            alt="oops"
                        />
                            <Image
                            className="px-[15px]"
                            src={Motto}
                            width={250}
                            alt="oops"
                        />
                            <Image
                            className="px-[15px] hidden 2xl:block"
                            src={Motto}
                            width={250}
                            alt="oops"
                        />

                            
                    </section>
                </div>
                
    )
}