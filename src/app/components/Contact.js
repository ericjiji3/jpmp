import Image from "next/image";
import MeCall from '../../../public/images/meCTA.png';
import MeFr from '../../../public/images/realPhoto.jpg';

export default function Contact(){
    return(
        <div>
            <div className="flex justify-between items-center py-10">
                <div>
                    <Image
                        src={MeCall}
                        width={200}
                        alt="oops"
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-4xl">Want To Work Together?</h2>
                    <h2 className="text-2xl">Feel free to reach out via call, text or email - Let's get to work telling a powerful story together!</h2>
                </div>
                <div>
                    <Image
                        src={MeCall}
                        width={200}
                        alt="oops"
                        className="scale-x-[-1]"
                    />
                </div>
            </div>
            <div className="flex">
                <div className="border border-black border-[3px] bg-[#FDF0D5] p-8 drop-shadow-md rounded-xl w-[50%] mr-2 flex">
                        <Image
                            src={MeFr}
                            width={300}

                            alt="oops"
                            className="rounded-md border border-black border-[3px] h-auto self-start"
                        />
                
                    
                    <div className="ml-6">
                        <h2 className="text-3xl">Jaden Patterson</h2>
                        <span>
                        I'm a 22-year-old recent graduate from UT Austin, driven and dedicated to bringing ideas to life with an unwavering commitment to delivering the highest quality stories. Specializing in cinematography and directing for narrative content, I offer a broad spectrum of expertise in roles such as Director, Director of Photography, Music Video Directing, Camera Operation, Event Videography, Video Editing, and Color Grading.
                        </span>
                        
                        <span>
                        My narrative finesse extends beyond the lens to the editing suite, where I can transform raw footage into compelling narratives, ensuring seamless flow, pacing, and emotional resonance. My multidisciplinary proficiency is fortified by a degree in Radio Television and Film from UT Austin, making me a well-rounded professional poised to deliver end-to-end visual solutions.
                        </span>
                        <span>
                        For me, filmmaking is more than a craft; it's a calling to evoke emotions, spark reflection, and inspire change. With each project, I embark on a fervent mission to infuse stories with life, leaving an indelible mark on the ever-evolving tapestry of cinema and media.
                        </span>
                    </div>
                </div>
                <div className="border border-black border-[3px] bg-[#FDF0D5] p-8 drop-shadow-md rounded-xl w-[50%] ml-2">

                </div>
            </div>
        </div>
    )
}