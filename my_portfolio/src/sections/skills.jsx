import './home.css'
function Skills(){
    return(
        <section id="skills" className='sec'>
            <h1>Skills page</h1>
            <div className="skill-content">
                <div className="frontend">
                    <h2>Frontend </h2>
                    <p><img src="/assets/icons/html.png" alt="html-img" /> 
                    <img src="/assets/icons/css.png" alt="css-img" />
                    <img src="/assets/icons/js.png" alt="javascript-img" />
                    <img src="/assets/icons/react.png" alt="" /></p>
                    <p>html css javascript reactjs</p>
                </div>
                <div className="backend">
                    <h2>Language</h2>
                    <p><img src="/assets/icons/python.png" alt="" /></p>
                    <p>Python</p>
                </div>
                <div className="database-management">
                    <h2>Database Management</h2>
                    <p><img src="/assets/icons/mysql.png" alt="" /></p>
                </div>
                <div className='tools'>
                    <h2>Tools</h2>
                    <p><img src="/assets/icons/vscode.png" alt="vs-img" /> 
                    <img src="/assets/icons/git.png" alt="git-img" />
                    <img src="/assets/icons/github.png" alt="github-img" /></p>
                    <p>VS code Git Github</p>
                </div>
            </div>
        </section>
    )
}
export default Skills;