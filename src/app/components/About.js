'use client';

import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import MeFr from '../../../public/images/realPhoto.jpg';

export default function About(){
    return(
        <Parallax translateX={[200, 0]} startScroll={2000} endScroll={3700}>
        <div className='my-4 flex bg-[#FDF0D5] p-8 rounded-xl drop-shadow-md w-[75%] mx-auto border border-black border-[3px]'>
            <div className='w-fit p-4'>
                <Image
                    src={MeFr}
                    width={300}

                    alt="oops"
                    className="rounded-md border border-black border-[3px] h-full object-cover self-start"
                />
            </div>
            <div className='w-full p-4'>
                <h2 className='text-4xl mb-0'>What I Do</h2>
                <h2 className='text-2xl'>Jaden Patterson</h2>
                <span>I am a 22-year-old recent graduate from UT Austin, driven and dedicated to bringing ideas to life with an unwavering commitment to delivering the highest quality stories. Specializing in cinematography and directing for narrative content, I offer a broad spectrum of expertise in roles such as Director, Director of Photography, Music Video Directing, Camera Operation, Event Videography, Video Editing, and Color Grading.</span>
                <br/>
                <br/>
                <span>I am passionate about my craft and consistently seeking opportunities to learn and gain experience. I believe in the power of storytelling and am committed to refining my skills to tell better, more compelling stories through the medium of film.</span>
            </div>
        </div>
        </Parallax>
    )
}