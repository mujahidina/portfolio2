function About(){
    return(
        <div className="bg-black  h-[80vh] items-center justify-center flex " id="about">
            <div className="h-[80%] w-[70%] rounded-xl flex flex-row justify-center">
                  <div className="w-[80%] ml-32 h-full text-white pt-28">
                    <h1 className="poppins-bold text-3xl mb-6">About Me.</h1>
                    <div className="w-[80%] h-72 flex flex-wrap">
                        <p className="poppins-medium text-gray-400">Passionate and skilled Full Stack Developer with a year of
                            experience in designing, developing, and deploying high-
                            quality software solutions. Proficient in Python and
                            JavaScript, with expertise in modern web development
                            frameworks such as React, Node.js, and Flask.
                            Experienced in database management (PostgreSQL,
                            SQLite), CI/CD pipelines, and version control systems like
                            Git. Strong in creating robust Restful APIs and integrating
                            them seamlessly into frontend and backend
                            architectures. Adept at solving complex problems and
                            delivering scalable, maintainable solutions.</p>
                    </div>

                  </div>

            </div>

        </div>

    )
}

export default About;

