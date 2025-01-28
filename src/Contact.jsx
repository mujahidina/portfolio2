import { AiOutlineMail } from "react-icons/ai";

function Contact(){
    return(
        <div className="bg-black h-[45vh] justify-center  flex poppins-semibold text-white">
            <div className="w-96 h-64 my-auto justify-center  flex flex-col">
                <h1 className="text-xl text-blue-300">Contact</h1>
                <p className="text-gray-200 text-3xl mb-4">Dont be shy! Hit me up.👇</p>
                <div className="w-5/5 h-11 flex flex-row justify-center ">
                       <AiOutlineMail size={20} className="mr-4"/>
                    <p className="text-md text-gray-400">mujahidabdi5070@gmail,com</p>

                </div>

            </div>
             
        </div>

    )
}

export default Contact;