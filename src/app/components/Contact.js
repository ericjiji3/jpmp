'use client';

import Image from "next/image";
import MeCall from '../../../public/images/meCTA.png';
import { Parallax } from 'react-scroll-parallax';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){
    const buttonRef = useRef(null);
    const [status, setStatus] = useState("SUBMIT");

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);

    const form = useRef();
    const [contact, setContact] = useState({
        start: 3500,
        end: 4500
    })

    function validateFields(data){
        var validate = true;
        Object.keys(data).forEach(function(field, index){
            if(field === 'email'){
                var email = data[field];
                email.toLowerCase();
                if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || !email){
                    validate = false;
                    setEmailErr(true);
                }
            }
            if(field === 'name'){
                if(!data[field]){
                    validate = false;
                    setNameErr(true);
                }
            }
        })
        return validate;
    }

    function sendEmail(e){
        e.preventDefault();
        setNameErr(false);
        setEmailErr(false);

        var data = {
            'name' : name,
            'phone' : phone,
            'email' : email,
            'message' : message
        }

        console.log(data);
        if(validateFields(data)){
            emailjs.sendForm('service_8ur5ep8', 'template_f64rn38', e.target, 'QJ0O-ENkeWsZraX-G')
            .then((result) => {
                setStatus('SENT');
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                setStatus('ERROR');
                console.log(error.text);
                e.target.reset();
            });
        } else{
            setStatus('FILL REQUIRED FIELDS');
            e.target.reset();
        }
        
    }


    useEffect(()=>{
        console.log(window.innerWidth);
         if(window.innerWidth <= 1024){
            setContact({
                start: 3000,
                end: 4000
            })

         }
    }, [])
    useEffect(() => {
  
        const handleResize = () => {
         console.log(window.innerWidth);
         if(window.innerWidth <= 1024){
            setContact({
                start: 3000,
                end: 4000
            })
         }
         
        }
        
        window.addEventListener('resize', handleResize);
        
        return () => {
         window.removeEventListener('resize', handleResize);
        };
        
      }, []);

    return(
        <div className="pt-1 pb-5 relative z-[1]" id="contact">
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
                <div className="noise border border-black border-[3px] bg-[#FDF0D5] px-2 py-4 lg:p-8 drop-shadow-md rounded-xl w-full mx-auto">
                    <h2 className="text-xl lg:text-3xl">Contact Me</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-wrap w-full justify-between my-1">
                            <label><h2 className="text-lg lg:text-xl">Name*:</h2></label>
                            <input className="noise w-[100%] bg-[#FDF0D5] border-black border-b-[3px] mt-[-5px]" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="flex flex-wrap w-full justify-between my-1">
                            <label><h2 className="text-lg lg:text-xl">Email*:</h2></label>
                            <input className="noise w-[100%] bg-[#FDF0D5] border-black border-b-[3px] mt-[-5px]" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="flex flex-wrap w-full justify-between my-1">
                            <label><h2 className="text-lg lg:text-xl">Phone:</h2></label>
                            <input className="noise w-[100%] bg-[#FDF0D5] border-black border-b-[3px] mt-[-5px]" type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        <div className="my-1">
                            <label><h2 className="text-lg lg:text-xl">Message:</h2></label>
                            <textarea type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="15" className="noise w-full bg-[#FDF0D5] border-black border-[3px] rounded-lg p-4"></textarea>
                        </div>
                        <button ref={buttonRef} type="submit" className="bg-[#F0544F] w-full border border-black border-[3px] rounded-lg mt-3 hover:bg-[#FDF0D5] transition-all transition-duration-250"><h2 className="text-lg lg:text-2xl">{status}</h2></button>
                    </form>
                </div>
                </Parallax>
        </div>
    )
}