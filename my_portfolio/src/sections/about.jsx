import './home.css'
function About(){
    return(
        <section id="about">
            <h2>About Page</h2>
            <div className="about-content">
                {/* <h3>About Me</h3> */}
                <h3>A little introduction about me</h3>
                <div className="flex">

                <div className='info'>
                    <p>Hello! I'm Bhajarang, an aspiring Full-Stack Developer passionate about building web applications and exploring modern technologies.
                    </p>
                    <p>I have a background in programming with Python and JavaScript. I enjoy developing interactive frontend interfaces.
                     </p>
                     <p>I am continuously improving my problem-solving skills and working on practical projects to strengthen my development knowledge.
                     </p> 
                </div>
                     <div id='interest'>
                        <h3>My interests </h3>
                        <p>
                        - Frontend Development <br />
                        - Full-StackWeb Development<br />
                        - Backend Development<br />
                        - Database Management<br />
                        - Problem Solving<br />
                        - Learning New Technologies
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About