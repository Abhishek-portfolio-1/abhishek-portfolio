import 'react'
import './App.css'
import './Footer.css'
import web from './web.png'
import twi from './twi.png'
import link from './link.png'
import git from './git.png'
import insta from './insta.png'


function Footer(){
    return(
        <>
        <div className="f-main">
            <div className="con-1">
                <div className="f-a">
                    <h3 className='a-a'>
                        About Me
                        <hr className='f-h' />
                    </h3>
                    <p>"I'm Abhishek ji, a creative web developer committed to building modern, responsive websites that work for everyone."</p>

                </div>
                <div className="f-a">
                   <h3 className='a-a'> Quick Links
                    <hr className='f-h' /></h3> 
                    <div className="f-q">
                    <a href="#" className="about">About</a><a href="#" className="about">Projects</a><a href="#" className="about">Skills</a><a href="#" className="about">Gallery</a><a href="#" className="about">Contact</a>
                </div>
                </div>
                <div className="f-a">
                     <h3 className='a-a'> Follow Me
                    <hr className='f-h' /></h3> 
                    <div className="f-q">
                        <div className="f-i">
                            <img className='img' src={web} alt="" />
                            <p>Website</p>
                        </div>
                        <div className="f-i">
                             <img className='img' src={twi} alt="" />
                            <p>Twitter</p>
                        </div>
                        <div className="f-i">
                             <img className='img' src={link} alt="" />
                            <p>Linkedin</p>
                        </div>
                        <div className="f-i"> <img className='img' src={git} alt="" />
                            <p>GitHub</p></div>
                        <div className="f-i"> <img className='img' src={insta} alt="" />
                            <p>Instagram</p></div>
                    </div>


                </div>
            </div>
            <div className="f-con2">
                <p>&#169; 2025 Abhishek. All right reserved.</p>
            </div>
           
        </div>
        </>
    )
}
export default Footer;