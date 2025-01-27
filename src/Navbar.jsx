function Navbar(){
    return(
        <div className="bg-black  w-full h-[8vh] flex flex-row justify-around items-center">
            <div className="w-14 h-12">
                <img src="/logo2.png" alt="" />
            </div>


            <div className=" flex flex-row  poppins-semibold text-sm text-gray-300 gap-10">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>


        </div>

    )
}

export default Navbar;