import './hero.css'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

function Hero(){

   const Resume = `MujahidsResume.pdf`;
    return(
        <div className="bg-black  h-[100vh] w-full flex flex-col poppins-semibold">
            <div className='w-full h-[70vh] flex flex-row'>
                <div className=' w-1/2 h-full text-white pt-36 pl-96 flex flex-col'>
                    <h1 className='text-5xl poppins-bold  tracking-wider'>Fullstack </h1>
                    <h1 className='text-5xl poppins-bold mt-2 tracking-wider'>Developer</h1>
                    <p className='mt-6'>Hey, im <span className='text-xl ml-2'>Mujahid Abdi</span></p>
                    <p className='text-gray-400'>Passsiontae about creating user-friendly softwares</p>
                    <div className='w-20 h-8 items-center flex flex-row mt-3 gap-4'>
                         <a href="http://www.linkedin.com/in/mujahid-abdi-124a8a269"><FaGithub /></a>
                         <a href="https://github.com/mujahidina?tab=repositories"><FaLinkedinIn /></a>
                    </div>
                    <button className='poppins-medium text-xs border border-gray-400 w-36 py-2 rounded-lg mt-7' ><a href={Resume} download='MujahidsResume'>Download resume</a></button>
                </div>

                <div className='w-1/2 h-full  flex pt-20'>
                    <div className=' w-96 h-96 '>
                    <img src="file.jpg" alt="" className='morph border border-5 border-white '/>
                    </div>
                    
                </div>
            </div>


            <div className=' h-[4vh] mb-4 text-gray-400 justify-center flex '>
                <h1>Tech Stack</h1>
            </div>

            



            <div className='wrapper h-[10vh] w-[50%] mx-auto flex flex-row mt-4'>
                     <div className='logo logo1  w-14 h-14 '>
                        <img src="/figma.png" alt="" />
                     </div>

                     <div className='logo logo2  w-14 h-14'>
                        <img src="/js.png" alt="" />
                     </div>

                     <div className='logo logo3 w-14 h-14'>
                        <img src="/react2.png" alt="" className='mt-1' />
                     </div>

                     <div className='logo logo4 w-14 h-14'>
                        <img src="/tailwind.png" alt="" />
                     </div>

                     <div className='logo logo5 w-14 h-14 '>
                        <img src="/python.png" alt="" className=''/>
                     </div>

                     <div className='logo logo6 w-14 h-14 bg-white'>
                        <img src="/flask.png" alt="" />
                     </div>

                     <div className='logo logo7 w-14 h-14'>
                        <img src="/github.png" alt="" />
                     </div>


                     <div className='logo logo8 w-14 h-14'>
                        <img src="/git.png" alt="" />
                     </div>
            </div>



        </div>

    )
}

export default Hero;