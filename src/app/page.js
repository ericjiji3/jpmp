import Image from 'next/image'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Videos from './components/Videos';
import Motto from '../../public/images/motto.png';
import HomeIcon from './components/HomeIcon';
import Insta from '../../public/insta.png';
import Youtube from '../../public/youtube.png';
import Jiji from '../../public/jiji.png';
import Banner from './components/Banner';

export default function Base() {
  return (
   <div className='overflow-hidden'>
    <div className='texturedContainer'></div>
    <div className='relative' id="home">
      <Home/>
    </div>
    <HomeIcon/>
    <div>
    <div className='relative w-[125%] overflow-hidden h-[35px] flex items-center py-8'>
                <Banner/>
            </div>
    </div>
    <div className="bg-[#F0544F] px-4 lg:px-8 overflow-hidden">
      <div id="videos">
        <Videos/>
      </div>
     </div>
     <div className='relative w-[125%] overflow-hidden h-[35px] flex items-center py-8'>
        <Banner/>
                
            </div>
     <div className="bg-[#F0544F] px-4 lg:px-8 overflow-hidden">
            <div id="about">
                <About/>
            </div>
            <div className='relative z-[1]'>
                <Contact/>
            </div>
            <div className='relative z-[1] flex gap-1 items-center'>
                <a href="https://www.instagram.com/dontneverquit/">
                <Image
                    src={Insta}
                    width={20}
                    alt="oops"
                    className='h-full'
                />
                </a>
                <a href="https://www.youtube.com/@dontneverquit">
                <Image
                    src={Youtube}
                    width={25}
                    alt="oops"
                    className='h-full'
                />
                </a>
                
            </div>
            <div className='relative z-[1] my-2'>
                <span className='block text-xs'>Website By: <a href="https://www.instagram.com/jiji.web/" className='underline'>@jiji.web</a></span>
                <span className='block text-xs'>Logos By: <a href="https://www.instagram.com/naturaworks/" className='underline'>@naturaworks</a></span>
            </div>
        </div>
      

    </div>
   
  )
}
