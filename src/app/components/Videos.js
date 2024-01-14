import Image from 'next/image';
import CameraSit from '../../../public/cameraSit.png';
import CameraStand from '../../../public/cameraStand.png';

export default function Videos(){
    return(
        <div className='py-4'>
            <div className='flex justify-between items-center'>
                <div className='relative'>
                    <Image
                        src={CameraSit}
                        width={150}
                        alt="oops"
                    />
                    <div className='absolute top-[-25px] left-[150px]'>
                        <svg width="391" height="149" viewBox="0 0 391 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 74.5L390.75 0.454834V148.545L0 74.5Z" fill="#FDF0D5"/>
                        </svg>
                    </div>
                </div>
                <div className='relative z-[1] bg-[#FDF0D5] p-8 rounded-2xl drop-shadow-md'>
                    <video controls width={500} className="w-full rounded-md border-black border-2">
                        <source src="/featuredVideo.mp4" />
                    </video>
                    <h2 className='text-3xl mt-4 text-center'>Directing And Cinematography Reel</h2>
                </div>
            </div>
            <div className='flex justify-between mb-16'>
                <div className="bg-[#FDF0D5] p-8 rounded-2xl drop-shadow-sm mt-14 w-[80%] grid grid-cols-2 gap-6">
                    <div>
                        <iframe className='w-full border border-black border-[2px] rounded-md' width="560" height="350" src="https://www.youtube.com/embed/IJZyeApOBl4?si=nxVHxVSAeT2xwuZN&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <h2 className='text-2xl mt-4 text-center'>Narratives of the Migrant Body</h2>
                    </div>
                    <div>
                        <iframe className='w-full border border-black border-[2px] rounded-md' width="560" height="350" src="https://www.youtube.com/embed/JKdpSlDlILI?si=hc8LD7QP_rJ_AgMr&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <h2 className='text-2xl mt-4 text-center'>"WORTHLESS" By D4VD</h2>
                    </div>
                    <div>
                        <iframe className='w-full border border-black border-[2px] rounded-md' width="560" height="350" src="https://www.youtube.com/embed/cubnywwLtwg?si=SMJAF5ZPRjBjt7P7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <h2 className='text-2xl mt-4 text-center'>OH LORD, BENEFITS</h2>
                    </div>
                    <div>
                        <iframe className='w-full border border-black border-[2px] rounded-md' width="560" height="350" src="https://www.youtube.com/embed/NlkROS81rQg?si=DY8XxJ5dD9PzJBGi&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <h2 className='text-2xl mt-4 text-center'>"BETH"</h2>
                    </div>
                    <div>
                        <iframe className='w-full border border-black border-[2px] rounded-md' width="560" height="350" src="https://www.youtube.com/embed/NLiYuI5mHA4?si=ViNXLb5hb_mfk5--&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <h2 className='text-2xl mt-4 text-center'>"I FOUND"</h2>
                    </div>
                    <div>
                        <iframe className='w-full border border-black border-[2px] rounded-md' width="560" height="350" src="https://www.youtube.com/embed/j6cJ0CznX8Y?si=nnIoNrMz1MtZH-fD&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <h2 className='text-2xl mt-4 text-center'>Grant Wedding Highlight Reel</h2>
                    </div>
                    <div>
                        <iframe className='w-full border border-black border-[2px] rounded-md' width="560" height="350" src="https://www.youtube.com/embed/-6xjI3wfE4Y?si=JEdXIauUD3pp9hJ_&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <h2 className='text-2xl mt-4 text-center'>Dylan and Mattie</h2>
                    </div>
                </div>
                <div className="flex relative mt-auto relative bottom-[-75px]">
                    <div className='absolute right-[105px] bottom-[92px] z-[0]'>
                        <svg width="455" height="150" viewBox="0 0 455 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M454.241 149.088L24.9614 0.845461L0.148089 141.569L454.241 149.088Z" fill="#FDF0D5"/>
                        </svg>`
                    </div>
                    <Image
                        src={CameraStand}
                        width={150}
                        alt="oops"
                    />
                    
                </div>
            </div>
            
        </div>
    )
}