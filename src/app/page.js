import Image from 'next/image'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Videos from './components/Videos';

export default function Base() {
  return (
   <div>
    <div>
      <Home/>
    </div>
    <div className="bg-[#F0544F] px-8">
      <div id="videos">
        <Videos/>
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
