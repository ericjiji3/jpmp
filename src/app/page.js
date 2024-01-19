import Image from 'next/image'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Videos from './components/Videos';
import Motto from '../../public/images/motto.png';

export default function Base() {
  return (
   <div className='overflow-hidden'>
    <div>
      <Home/>
    </div>
    <div>
    <div className='relative bg-[#F0544F] w-[125%] overflow-hidden h-[35px] flex items-center py-8'>
                <div className='absolute flex w-[125%]'>
                    <section className="flex animate-[swipe_5s_linear_infinite_backwards]">
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
                            <Image
                            className="px-[15px] hidden 2xl:block"
                            src={Motto}
                            width={250}
                            alt="oops"
                        />
                            
                    </section>
                    <section className="flex animate-[swipe_5s_linear_infinite_backwards]">
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
                            
                            <Image
                            className="px-[15px] hidden 2xl:block"
                            src={Motto}
                            width={250}
                            alt="oops"
                        />
                    </section>
                    <section className="flex animate-[swipe_5s_linear_infinite_backwards]">
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
                            <Image
                            className="px-[15px] hidden 2xl:block"
                            src={Motto}
                            width={250}
                            alt="oops"
                        />
                            
                    </section>
                </div>
                
            </div>
    </div>
    <div className="bg-[#F0544F] px-8 overflow-hidden">
      <div id="videos">
        <Videos/>
      </div>
      <div className='relative bg-[#F0544F] w-[125%] overflow-hidden h-[35px] flex items-center py-8'>
                <div className='absolute flex w-[125%]'>
                    <section className="flex animate-[swipe_5s_linear_infinite_backwards]">
                        <Image
                        className="px-[15px]"
                            src={Motto}
                            width={250}
                        />
                            <Image
                            className="px-[15px]"
                            src={Motto}
                            width={250}
                        />
                            <Image
                            className="px-[15px] hidden 2xl:block"
                            src={Motto}
                            width={250}
                        />
                            <Image
                            className="px-[15px] hidden 2xl:block"
                            src={Motto}
                            width={250}
                        />
                            
                    </section>
                    <section className="flex animate-[swipe_5s_linear_infinite_backwards]">
                        <Image
                        className="px-[15px]"
                            src={Motto}
                            width={250}
                        />
                            <Image
                            className="px-[15px]"
                            src={Motto}
                            width={250}
                        />
                            <Image
                            className="px-[15px] hidden 2xl:block"
                            src={Motto}
                            width={250}
                        />
                            
                            <Image
                            className="px-[15px] hidden 2xl:block"
                            src={Motto}
                            width={250}
                        />
                    </section>
                    <section className="flex animate-[swipe_5s_linear_infinite_backwards]">
                        <Image
                        className="px-[15px]"
                            src={Motto}
                            width={250}
                        />
                            <Image
                            className="px-[15px]"
                            src={Motto}
                            width={250}
                        />
                            <Image
                            className="px-[15px] hidden 2xl:block"
                            src={Motto}
                            width={250}
                        />
                            <Image
                            className="px-[15px] hidden 2xl:block"
                            src={Motto}
                            width={250}
                        />
                            
                    </section>
                </div>
                
            </div>
            <div id="about">
                <About/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
        </div>
      

    </div>
   
  )
}
