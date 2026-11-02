import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar(){
    const a_style={
        textDecoration:'none',
        padding:'10px 10px',
        border:'1px solid',
        borderRadius:'10px'
    }
    return(
        <nav className="navbar">
            <h3>My_Name</h3>
             {/* <h1>WELCOME TO MY PAGE</h1> */}
                <ul className='ul'>
                    <li><Link to='/' style={a_style}>Home</Link></li>
                    <li><Link to='/about' style={a_style}>About</Link></li>
                    <li><Link to='/skills' style={a_style}>Skills</Link></li>
                    <li><Link to='/projects' style={a_style}>Projects</Link></li>
                    <li><Link to='/contacts' style={a_style}>Contacts</Link></li>
                </ul>
            
        </nav>
    )
}
export default Navbar