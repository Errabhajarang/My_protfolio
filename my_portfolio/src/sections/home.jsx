import './home.css'
function Home(){
    return(
        <section id="home" className="home">
            <h1>WELCOME TO MY PAGE</h1>
            <div className='home-content'>
                <div id='one'>
                    <h1>Hii, I'm Bhajarang <br />
                    Aspiring Fullstock Developer</h1>
                    <p>
                    I'm an aspiring Full-Stack Developer with a strong interest in web development, backend technologies and database management. I enjoy learning new technologies and developing applications that solve real-world problems.</p> 
                </div>
                <div className="img">
                    <img src="/assets/images.jpg" alt="laptop" style={{borderRadius:'50%',padding:'5px',marginLeft:'15%', border:'inset black'}} width={250} height={250}/>
                </div>
            </div>
        </section>
    )
}
export default Home;