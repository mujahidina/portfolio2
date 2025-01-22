function About(){
    return(
        <div className="bg-black  h-[80vh] items-center justify-center flex ">
            <div className="bg-gray-900 h-[80%] w-[70%] rounded-xl flex flex-row">
                  
                  <div className=" w-[30%] h-full justify-center items-center flex">
                    {/* <img src="/memoji2.png" alt="" /> */}
                  </div>

                  <div className="w-[70%] h-full text-white pt-28 pl-16 ">
                    <h1 className="poppins-bold text-3xl mb-6">About Me.</h1>
                    <div className="w-[80%] h-72 flex flex-wrap">
                        <p className="poppins-medium text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
                            iaculis augue at nisi malesuada pulvinar at sit amet lorem. Nullam lectus
                             sapien, luctus at euismod vitae, lacinia vel erat. Praesent quis vulputate
                             libero, quis rutrum dui. In tincidunt augue mi, eget lacinia mi imperdiet a. 
                             Nullam non varius ligula, id pharetra libero. Nam nec fermentum mauris, vitae elementum dolor.</p>
                    </div>

                  </div>

            </div>

        </div>

    )
}

export default About;