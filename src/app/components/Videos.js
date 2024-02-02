'use client';

import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
import CameraSit from '../../../public/cameraSit.png';
import CameraStand from '../../../public/cameraStand.png';
import CameraShrug from '../../../public/cameraShrug.png';
import PlayIcon from '../../../public/playIcon.png';
import Beth from '../../../public/bethGif.gif';
import Dylan from '../../../public/dylanGif.gif';
import IFound from '../../../public/iFoundGif.gif';
import Narrative from '../../../public/narrativeGif.gif';
import OhLord from '../../../public/ohLordGif.gif';
import Wedding from '../../../public/weddingGif.gif';
import Worthless from '../../../public/worthlessGif.gif';
import { useState, useEffect, useRef } from 'react';

export default function Videos(){
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

    const [work, setWork] = useState({
        start: 1000,
        end: 2000
    })
    const [work2, setWork2] = useState({
        start: 2000,
        end: 2400
    })
    const [work3, setWork3] = useState({
        start: 2400,
        end: 2800
    })
    const [work4, setWork4] = useState({
        start: 2800,
        end: 3300
    })
    useEffect(()=>{
        console.log(window.innerWidth);
         if(window.innerWidth <= 1024){
            setWork({
                start: 700,
                end: 1100
            })
            setWork2({
                start: 1100,
                end: 1400
            })
            setWork3({
                start: 1400,
                end: 2000
            })
            setWork4({
                start: 2000,
                end: 2600
            })
         }
    }, [])
    useEffect(() => {
  
        const handleResize = () => {
         console.log(window.innerWidth);
         if(window.innerWidth <= 1024){
            setWork({
                start: 700,
                end: 1100
            })
            setWork2({
                start: 1100,
                end: 1400
            })
            setWork3({
                start: 1400,
                end: 2000
            })
            setWork4({
                start: 2000,
                end: 2600
            })
         }
         
        }
        
        window.addEventListener('resize', handleResize);
        
        return () => {
         window.removeEventListener('resize', handleResize);
        };
        
      }, []);

      const toggleVideo = () =>{
        if(videoRef.current.paused){
            videoRef.current.play();
            setPlay(true);
        }else{
            videoRef.current.pause();
            setPlay(false);
        }
        
      }

    return(

        <div className='py-4'>
            
            <div className='flex flex-row relative justify-between items-center'>
                <Parallax translateX={[-200, 0]} startScroll={200} endScroll={1100}>
                <div className='relative hidden lg:block lg:right-0 lg:rotate-0 lg:mt-0'>
                    <Image
                        src={CameraSit}
                        width={150}
                        alt="oops"
                        className='w-[75px] h-auto lg:w-[150px]'
                    />
                    <div className='absolute top-[-50px] left-[65px] lg:top-[-25px] lg:left-[150px]'>
                        <svg width="300" height="149" viewBox="0 0 391 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 74.5L390.75 0.454834V148.545L0 74.5Z" fill="#FDF0D5"/>
                        
                        </svg>
                    </div>
                </div>
                </Parallax>
            
                <div className='noise relative z-[1] bg-[#FDF0D5] p-2 lg:pt-2 lg:p-8 rounded-2xl drop-shadow-md w-full lg:w-[80%]'>
                    <Parallax opacity={[0, 1]} startScroll={200} endScroll={800}>

                        <a href="https://www.youtube.com/watch?v=0OaRs5FaGi8" target="_blank" className='group relative flex items-center justify-center'>
                        <h2 className='text-lg lg:text-3xl text-center relative z-[2]'>MY DEMO REEL</h2>
                        <Image
                                src={PlayIcon}
                                width={35}
                                alt="oops"
                                className='block w-[35px] mb-1 ml-3 h-auto lg:w-[35px] group-hover:scale-[1.3] transition-all duration-250'
                            />
                        </a>
                    
                    
                    <a href="https://www.youtube.com/watch?v=0OaRs5FaGi8" target="_blank" className='relative'>
                        <video loop muted autoPlay playsInline={true} width={500} className="w-[500px] lg:w-full rounded-md border-black border-2" poster="thumbnail.png" ref={videoRef}>
                            <source src="/featuredVideo.mp4" />
                        </video>
                        {/* <img
                            src='./directingReel.gif'
                            width={560}
                            alt="oops"
                            className='w-full h-auto lg:h-[500px] border border-black border-[2px] rounded-md object-cover'
                        /> */}
                        
                    </a>
                    {/* <h2 className='text-lg lg:text-3xl mt-2 lg:mt-4 text-center'>Directing And Cinematography Reel</h2> */}
                    </Parallax>
                </div>
                
            </div>
            <h2 className='text-3xl lg:text-4xl text-center mt-14 mb-5 relative z-[2]'>RECENT WORK</h2>
            <div className='flex justify-between mb-16'>
                <div className='noise w-full lg:w-[82%] bg-[#FDF0D5] px-2 py-4 lg:p-8 rounded-2xl drop-shadow-sm mt-5 relative z-[1]'>
                <Parallax opacity={[0, 1]} startScroll={work.start} endScroll={work.end}>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-[1]">
                    
                    
                    <div className='relative'>
                        <a href="https://www.youtube.com/watch?v=IJZyeApOBl4&feature=youtu.be" target="_blank" className='group'>
                        {/* <iframe className='w-full h-auto lg:h-[350px] border border-black border-[2px] rounded-md' width="560" height="350" src="https://www.youtube.com/embed/IJZyeApOBl4?si=nxVHxVSAeT2xwuZN&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                        <img
                            src='./ohLordGif.gif'
                            width={560}
                            alt="oops"
                            className='w-full h-auto lg:h-[350px] border border-black border-[2px] rounded-md object-cover'
                        />
                        <Image
                            src={PlayIcon}
                            width={75}
                            alt="oops"
                            className='block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-85%] w-[50px] lg:w-[100px] group-hover:scale-[1.2] transition-all duration-250'
                        />
                        <h2 className='text-lg lg:text-2xl mt-4 text-center'>Narratives of the Migrant Body</h2>
                        </a>
                    </div>
                    <div className='relative'>
                        <a href="https://www.youtube.com/watch?v=JKdpSlDlILI" target="_blank" className='group'>
                        {/* <Image
                            src={Worthless}
                            width={560}
                            height={350}
                            className='w-full h-auto lg:h-[350px] border border-black border-[2px] rounded-md object-cover'
                            alt="oops"
                        /> */}
                        <img
                            src='./worthlessGif.gif'
                            width={560}
                            alt="oops"
                            className='w-full h-auto lg:h-[350px] border border-black border-[2px] rounded-md object-cover'
                        />
                        <Image
                            src={PlayIcon}
                            width={75}
                            alt="oops"
                            className='block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-85%] w-[50px] lg:w-[100px] group-hover:scale-[1.2] transition-all duration-250'
                        />
                        <h2 className='text-lg lg:text-2xl mt-4 text-center'>&apos;WORTHLESS&apos; By D4VD</h2>
                        </a>
                    </div>
                    
                    
                </div>
                </Parallax>
                </div>
                <div className="flex relative mt-auto relative right-[-15px] bottom-[100px] lg:right-[0px] lg:bottom-[-75px] z-[0]">
                    <Parallax translateX={[200, 0]} startScroll={work.start} endScroll={work.end}>
                    <div className='absolute right-[50px] bottom-[25px] lg:right-[105px] lg:bottom-[92px] z-[0]'>
                        <svg width="300" height="150" viewBox="0 0 455 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M454.241 149.088L24.9614 0.845461L0.148089 141.569L454.241 149.088Z" fill="#FDF0D5"/>
                        </svg>
                    </div>
                    <Image
                        src={CameraStand}
                        width={150}
                        alt="oops"
                        className='w-[75px] h-auto lg:w-[150px]'
                    />
                    </Parallax>
                </div>
            </div>
            <div className='flex justify-between mb-16'>
                <div className="relative bottom-[-300px]">
                 
                <Parallax translateX={[-200, 0]} startScroll={work2.start} endScroll={work2.end} className='relative'> 
                <div className="flex mt-auto relative right-[10px] lg:right-[0px] z-[0]">
                    <div className='absolute left-[50px] bottom-[35px] lg:left-[105px] lg:bottom-[120px] z-[0] scale-x-[-1]'>
                        <svg width="300" height="150" viewBox="0 0 455 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M454.241 149.088L24.9614 0.845461L0.148089 141.569L454.241 149.088Z" fill="#FDF0D5"/>
                        </svg>
                    </div>
                    <Image
                        src={CameraShrug}
                        width={150}
                        alt="oops"
                        className='w-[75px] h-auto lg:w-[150px]'
                    />
                    
                </div>
                </Parallax>
                </div>
                <div className="w-full lg:w-[82%] bg-[#FDF0D5] px-2 py-4 lg:p-8 rounded-2xl drop-shadow-md mt-5 relative z-[2] noise">
                <Parallax opacity={[0, 1]} startScroll={work2.start} endScroll={work2.end}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
                    <div className='relative'>
                        <a href="https://www.youtube.com/watch?v=cubnywwLtwg&feature=youtu.be" target="_blank" className='group'>
                        {/* <Image
                            src={OhLord}
                            width={560}
                            height={350}
                            className='w-full h-auto lg:h-[350px] border border-black border-[2px] rounded-md object-cover'
                            alt="oops"
                        /> */}
                        <img
                            src='./narrativeGif.gif'
                            width={560}
                            alt="oops"
                            className='w-full h-auto lg:h-[350px] border border-black border-[2px] rounded-md object-cover'
                        />
                        <Image
                            src={PlayIcon}
                            width={75}
                            alt="oops"
                            className='block absolute z-[2] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-85%] w-[50px] lg:w-[100px] group-hover:scale-[1.2] transition-all duration-250'
                        />
                        <h2 className='text-lg lg:text-2xl mt-4 text-center'>OH LORD, BENEFITS</h2>
                        </a>
                    </div>
                    <div className='relative'>
                        <a href="https://www.youtube.com/watch?v=NlkROS81rQg" target="_blank" className='group'>
                        {/* <Image
                            src={Beth}
                            width={560}
                            height={350}
                            className='w-full h-auto lg:h-[350px] border border-black border-[2px] rounded-md object-cover'
                            alt="oops"
                        /> */}
                        <img
                            src='./bethGif.gif'
                            width={560}
                            alt="oops"
                            className='w-full h-auto lg:h-[350px] border border-black border-[2px] rounded-md object-cover'
                        />
                        <Image
                            src={PlayIcon}
                            width={75}
                            alt="oops"
                            className='block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-85%] w-[50px] lg:w-[100px] group-hover:scale-[1.2] transition-all duration-250'
                        />
                        <h2 className='text-lg lg:text-2xl mt-4 text-center'>&apos;BETH&apos;</h2>
                        </a>
                    </div>
                </div>
                </Parallax>                    
                </div>
            </div>
            <div className='flex justify-between mb-16'>
                <div className="bg-[#FDF0D5] px-2 py-4 lg:p-8 rounded-2xl drop-shadow-sm mt-5 w-[82%] relative z-[2] noise">
                <Parallax opacity={[0, 1]} startScroll={work3.start} endScroll={work3.end}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-[1]">

                    <div className='relative'>
                        {/* <iframe className='w-full h-auto lg:h-[350px] border border-black border-[2px] rounded-md' width="560" height="350" src="https://www.youtube.com/embed/NLiYuI5mHA4?si=ViNXLb5hb_mfk5--&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                        <a href="https://www.youtube.com/watch?v=NLiYuI5mHA4" target="_blank" className='group'>
                        {/* <Image
                            src={IFound}
                            width={560}
                            height={350}
                            className='w-full h-auto lg:h-[350px] border border-black border-[2px] rounded-md object-cover'
                            alt="oops"
                        /> */}
                        <img
                            src='./iFoundGif.gif'
                            width={560}
                            alt="oops"
                            className='w-full h-auto lg:h-[350px] border border-black border-[2px] rounded-md object-cover'
                        />
                        <Image
                            src={PlayIcon}
                            width={75}
                            alt="oops"
                            className='block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-85%] w-[50px] lg:w-[100px] group-hover:scale-[1.2] transition-all duration-250'
                        />
                        <h2 className='text-lg lg:text-2xl mt-4 text-center'>&apos;I FOUND&apos;</h2>
                        </a>
                    </div>
                    <div className='relative'>
                        <a href="https://www.youtube.com/watch?v=j6cJ0CznX8Y&feature=youtu.be" target="_blank" className='group'>
                        {/* <Image
                            src={Wedding}
                            width={560}
                            height={350}
                            className='w-full h-auto lg:h-[350px] border border-black border-[2px] rounded-md object-cover'
                            alt="oops"
                        /> */}
                        <img
                            src='./weddingGif.gif'
                            width={560}
                            alt="oops"
                            className='w-full h-auto lg:h-[350px] border border-black border-[2px] rounded-md object-cover'
                        />
                        <Image
                            src={PlayIcon}
                            width={75}
                            alt="oops"
                            className='block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-85%] w-[50px] lg:w-[100px] group-hover:scale-[1.2] transition-all duration-250'
                        />
                        <h2 className='text-lg lg:text-2xl mt-4 text-center'>Grant Wedding Highlight Reel</h2>
                        </a>
                    </div>

                </div>
                </Parallax>                    
                </div>
                <div className='relative bottom-[-250px]'>
                <Parallax translateX={[250, 0]} startScroll={work3.start} endScroll={work3.end}>
                <div className="flex relative left-[15px] lg:left-[0px] mt-auto z-[0]">
                    <div className='absolute right-[50px] bottom-[30px] lg:right-[105px] lg:bottom-[92px] z-[0]'>
                        <svg width="280" height="150" viewBox="0 0 455 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M454.241 149.088L24.9614 0.845461L0.148089 141.569L454.241 149.088Z" fill="#FDF0D5"/>
                        </svg>
                    </div>
                    <Image
                        src={CameraStand}
                        width={150}
                        alt="oops"
                        className='w-[75px] h-auto lg:w-[150px]'
                    />
                    
                </div>
                </Parallax>
                </div>
            </div>
            <div className='flex justify-center mb-16'>
                <div className='relative bottom-[-200px] right-[10px] lg:bottom-[-350px] lg:right-[200px] z-[0]'>
                <Parallax translateX={[-250, 0]} startScroll={work4.start} endScroll={work4.end}>
                <div className="flex relative mt-auto relative scale-x-[-1]">
                    <div className='absolute right-[45px] bottom-[25px] lg:right-[105px] lg:bottom-[115px] z-[0]'>
                        <svg width="300" height="150" viewBox="0 0 455 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M454.241 149.088L24.9614 0.845461L0.148089 141.569L454.241 149.088Z" fill="#FDF0D5"/>
                        </svg>
                    </div>
                    <Image
                        src={CameraStand}
                        width={150}
                        alt="oops"
                        className='w-[75px] h-auto lg:w-[150px]'
                    />
                    
                </div>
                </Parallax>                    
                </div>
                <div className='bg-[#FDF0D5] px-2 py-4 lg:p-8 rounded-2xl drop-shadow-md mt-14 w-full lg:w-[40%] z-[2] noise'>
                <Parallax opacity={[0, 1]} startScroll={work4.start} endScroll={work4.end}>
               
                <div className="grid grid-cols-1 gap-6 relative z-[1]">

                    <div className='relative'>
                        <a href="https://www.youtube.com/watch?v=-6xjI3wfE4Y" target="_blank" className='group'>
                        {/* <Image
                            src={Dylan}
                            width={560}
                            height={350}
                            className='w-full h-auto lg:h-[350px] border border-black border-[2px] rounded-md object-cover'
                            alt="oops"
                        /> */}
                        <img
                            src='./dylanGif.gif'
                            width={560}
                            alt="oops"
                            className='w-full h-auto lg:h-[350px] border border-black border-[2px] rounded-md object-cover'
                        />
                        <Image
                            src={PlayIcon}
                            width={75}
                            alt="oops"
                            className='block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-85%] w-[50px] lg:w-[100px] group-hover:scale-[1.2] transition-all duration-250'
                        />
                        <h2 className='text-lg lg:text-2xl mt-4 text-center'>Dylan and Mattie</h2>
                        </a>
                    </div>
                </div>
                
                </Parallax>                    
                </div>
            </div>
        </div>
    )
}