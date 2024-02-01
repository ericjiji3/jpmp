import Image from "next/image";
import Logo from '../../../public/images/homeLogo.png';
import Link from 'next/link';

export default function Home(){
    return(
        <div className="relative h-[100dvh] w-full bg-black overflow-hidden">
            
                <h1 className="hidden">JP Motion Pictures</h1>
                <div className="relative z-[1] text-center w-full pt-12">
                    <Image
                        src={Logo}
                        width={250}
                        alt="oops"
                        className="mx-auto w-[200px] lg:w-[250px]"
                    />
                    <h2 className="text-white text-lg lg:text-xl tracking-[3px]">
                        IMPACTFUL NARRATIVES THROUGH CINEMATIC EXCELLENCE
                    </h2>
                </div>
                <div>
                <div className="absolute bottom-0 z-[1] text-white w-full">
                    <div className="flex justify-center w-full">
                        <Link href='#contact'>
                            <h4 className="text-xl px-4 py-2 tracking-[3px]">Hire Me</h4>
                            
                        </Link>
                        <Link href='#videos'>
                            <h4 className="text-xl px-4 py-2 tracking-[3px]">My Work</h4>
                        </Link>
                    </div>
                    <div className="block mb-6">
                        <svg width="29" height="18" viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                            <line x1="1.06066" y1="1.93934" x2="15.2028" y2="16.0815" stroke="white" strokeWidth="3"/>
                            <line x1="13.2963" y1="15.6708" x2="27.4384" y2="1.52865" stroke="white" strokeWidth="3"/>
                        </svg>
                    </div>
                </div>
            
            {/* <video autoPlay loop muted controls='' className="absolute h-full w-full object-cover top-0 z-[0]"> */}
            <video loop muted autoPlay playsInLine={true} className="absolute h-full w-full object-cover top-0 z-[0]">
                <source src="/homeVideo.mp4" />
            </video>
            </div>
        </div>
    )
}