'use client';

import Image from "next/image";
import MeCall from '../../../public/images/meCTA.png';
import { Parallax } from 'react-scroll-parallax';
import { useState, useEffect } from 'react';

export default function Contact(){
    const [contact, setContact] = useState({
        start: 3500,
        end: 4500
    })
    
    
    useEffect(()=>{
        console.log(window.innerWidth);
         if(window.innerWidth <= 1024){
            setContact({
                start: 3000,
                end: 3300
            })

         }
    }, [])
    useEffect(() => {
  
        const handleResize = () => {
         console.log(window.innerWidth);
         if(window.innerWidth <= 1024){
            setContact({
                start: 3000,
                end: 3300
            })
         }
         
        }
        
        window.addEventListener('resize', handleResize);
        
        return () => {
         window.removeEventListener('resize', handleResize);
        };
        
      }, []);

    return(
        <div className="pt-1 pb-5" id="contact">
            <div className="flex justify-between items-center py-10">
                <div>
                    <Image
                        src={MeCall}
                        width={200}
                        alt="oops"
                        className="w-[150px] lg:w-[200px]"
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-2xl lg:text-4xl">Want To Work Together?</h2>
                    <h2 className="text-lg lg:text-2xl">Feel free to reach out via call, text or email - Let&apos;s get to work telling a powerful story together!</h2>
                </div>
                <div>
                    <Image
                        src={MeCall}
                        width={200}
                        alt="oops"
                        className="scale-x-[-1] w-[150px] lg:w-[200px]"
                    />
                </div>
            </div>
                <Parallax translateY={[100, 0]} opacity={[0,1]} startScroll={contact.start} endScroll={contact.end}>
                <div className="border border-black border-[3px] bg-[#FDF0D5] p-8 drop-shadow-md rounded-xl w-full mx-auto">
                    <h2 className="text-xl lg:text-3xl">Contact Me</h2>
                    <form>
                        <div className="flex flex-wrap w-full justify-between my-1">
                            <label><h2 className="text-lg lg:text-xl">Name*:</h2></label>
                            <input className="w-[100%] bg-[#FDF0D5] border-black border-b-[3px] mt-[-5px]" type='text' name="name"/>
                        </div>
                        <div className="flex flex-wrap w-full justify-between my-1">
                            <label><h2 className="text-lg lg:text-xl">Email*:</h2></label>
                            <input className="w-[100%] bg-[#FDF0D5] border-black border-b-[3px] mt-[-5px]" type='text' name="email"/>
                        </div>
                        <div className="flex flex-wrap w-full justify-between my-1">
                            <label><h2 className="text-lg lg:text-xl">Phone:</h2></label>
                            <input className="w-[100%] bg-[#FDF0D5] border-black border-b-[3px] mt-[-5px]" type='text' name="phone"/>
                        </div>
                        <div className="my-1">
                            <label><h2 className="text-lg lg:text-xl">Message:</h2></label>
                            <textarea name="message" rows="15" className="w-full bg-[#FDF0D5] border-black border-[3px] rounded-lg p-4"></textarea>
                        </div>
                        <button type="submit" className="bg-[#F0544F] w-full border border-black border-[3px] rounded-lg mt-3"><h2 className="text-lg lg:text-2xl">SUBMIT</h2></button>
                    </form>
                </div>
                </Parallax>
        </div>
    )
}