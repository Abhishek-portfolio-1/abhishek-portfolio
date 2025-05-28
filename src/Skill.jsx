import 'react'
import './App.jsx'
import html from './html.png'
import css from './css.png'
import js from './js.png'
import react from './react.svg'


function Skill (){
    return(
        <>
        <div className="smain">
            <div className="shead">
                <p>My Skills</p>
                <hr className='sline' />
            </div>
            <div className="sskill">
            <div className="scon"> <img className='simg' src={html} alt="" />
            <p className='sp' > <span className='sh' >HTML</span> is like the building blocks of a web page. It tells the browser how to display text, images, links, and other content.</p></div>
            <div className="scon"><img className='simg' src={css} alt="" />
            <p className="sp"><span className="sh">CSS</span> stands for Cascading Style Sheets. It is a stylesheet language used to describe the presentation of HTML or XML documents.</p></div>
            <div className="scon"><img className='simg' src={js} alt="" />
            <p className="sp"><span className="sh"> JavaScript</span> (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. </p></div>
            <div className="scon"><img className='simg' src={react} alt="" />
            <p className="sp"><span className="sh">React</span> is a JavaScript library used to build user interfaces—especially for websites and web apps.</p></div>
            </div>
        </div>
        </>
    )
}
export default Skill;