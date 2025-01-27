function Projects(){
    return(
        <div className="h-100vh  bg-black gap-16 w-full flex flex-col justify-center items-center text-white poppins-semibold">

            <h1 className="text-2xl">Projects</h1>


            {/* cloudstore */}
            <div className="border border-gray-700 w-[60%] h-[50vh] rounded-3xl flex flex-row opacity-60 hover:opacity-100">
                {/* right */}
                <div className="w-[50%] h-full justify-center items-center flex">
                    <div className="w-[90%] h-[90%] flex flex-col justify-center">
                        <h1 className="text-3xl">Cloudstore</h1>
                        <a href="https://cloud-store-54gn.vercel.app/" className=" text-gray-400 text-sm mt-1 border-b w-1/5"> Visit Project</a>
                        <div className="flex flex-wrap">
                        <p className="text-sm text-gray-400 mt-8">  I developed a full-stack cloud storage solution, 
                            similar to Google Drive, allowing users to create accounts, organize files into folders, 
                            and upload and manage files or images seamlessly. Using React.js and Tailwind CSS, I designed 
                            a responsive and user-friendly interface. On the backend, I implemented a secure API with Flask 
                            and Python, leveraging JWT authentication to manage user sessions and ensure data security. 
                            The database, built with SQL, efficiently handled user data and file organization, resulting in 
                            a scalable and reliable platform.</p>
                        </div>                       
                    </div>
                </div>
                {/* left */}
                <div className="w-1/2 h-full items-center flex p-5">
                        <img src="/cloudstore.png" alt="" className="object-cover mt-6" />
                </div>
            </div>









            {/* whells4rent */}
            <div className="border border-gray-700 w-[60%] h-[50vh] rounded-3xl flex flex-row opacity-60 hover:opacity-100">
                {/* right */}
                <div className="w-1/2 h-full items-center flex p-5">
                        <img src="/w4r.png" alt="" className="object-cover mt-6" />
                </div>
                 
                {/* left */}
                <div className="w-[50%] h-full justify-center items-center flex">
                    <div className="w-[90%] h-[90%] flex flex-col justify-center">
                        <h1 className="text-3xl">Wheels4Rent</h1>
                        <a href="https://wheels4rent.vercel.app/" className=" text-gray-400 text-sm mt-1 border-b w-1/5"> Visit Project</a>
                        <div className="flex flex-wrap">
                        <p className="text-sm text-gray-400 mt-8">  I created a comprehensive car rental system
                             that allows users to explore available vehicles, book rentals, and track their reservations 
                             with ease. The frontend, developed with React.js and styled using Tailwind CSS, offers a clean 
                             and engaging user experience. On the backend, I built a secure and efficient API using Flask 
                             and Python. A well-structured SQL database  underpins the platform, managing data for users, 
                             cars, and rentals seamlessly. This project showcases a cohesive and reliable solution tailored 
                             for a streamlined car rental experience.</p>
                        </div>                       
                    </div>
                </div>
            </div>




            {/* cloudstore */}
            <div className="border border-gray-700 w-[60%] h-[50vh] rounded-3xl flex flex-row opacity-60 hover:opacity-100">
                {/* right */}
                <div className="w-[50%] h-full justify-center items-center flex">
                    <div className="w-[90%] h-[90%] flex flex-col justify-center">
                        <h1 className="text-3xl">Cloudstore</h1>
                        <div className="flex flex-wrap">
                        <p className="text-xs text-gray-400 mb-16 mt-4">  iaculis augue at nisi malesuada pulvinar at sit amet lorem. Nullam lectus
                             sapien, luctus at euismod vitae, lacinia vel erat. Praesent quis vulputate
                             libero, quis rutrum dui. In tincidunt augue mi, eget lacinia mi imperdiet a. 
                             Nullam non varius ligula, id pharetra libero. Nam nec fermentum mauris, vitae elementum dolor</p>
                             <h3 className=" text-gray-200">Visit Project</h3>
                        </div>                       
                    </div>
                </div>

                {/* left */}
                <div className="w-1/2 h-full items-center flex p-5">
                        <img src="/cloudstore.png" alt="" className="object-cover" />
                </div>
            </div>





             {/* E-hub */}
             <div className="border border-gray-700 w-[60%] h-[50vh] rounded-3xl flex flex-row opacity-60 hover:opacity-100">
                {/* right */}
                <div className="w-1/2 h-full items-center flex p-5">
                        <img src="/ehub.png" alt="" className="object-cover mt-6" />
                </div>
                 
                {/* left */}
                <div className="w-[50%] h-full justify-center items-center flex">
                    <div className="w-[90%] h-[90%] flex flex-col justify-center">
                        <h1 className="text-3xl">E-hub</h1>
                        <div className="flex flex-wrap">
                        <p className="text-sm text-gray-400 mt-8">  I collaborated with a team to develop 
                            a full-stack e-commerce platform for electronic devices, offering separate navigation 
                            for clients and administrators. My role focused on backend development and API integrations 
                            with the frontend. Using Flask and Python, I built secure and scalable APIs, implemented JWT 
                            uthentication for user session management, and ensured seamless communication between the 
                            frontend and backend. The backend efficiently handled product inventories, user data, and orders 
                            using a SQL database. I worked closely with the frontend team, who used React.js and Tailwind 
                            CSS to create a responsive and user-friendly interface, resulting in a cohesive and reliable 
                            platform.</p>
                        </div>                       
                    </div>
                </div>
            </div>



























        </div>

    )
}

export default Projects;