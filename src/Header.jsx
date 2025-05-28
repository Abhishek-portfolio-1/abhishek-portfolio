import 'react'
import './App.css'
import  Logo from './Logo.png'





function Header(){
    return(
        <>
        <div className='main'>
            <p  className='logo'>Abhishek</p>
            
            
            <nav className='navh'>
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Contact</li></a>
                    <a href="#"><li>Project</li></a>
                </ul>
            </nav>
            </div>
        
        </>
    )
}
export default Header;