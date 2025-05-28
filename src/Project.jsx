import 'react'
import './Project.css'
import SRG from './book.png'
import Shape from './shapes.png'
import weather from './weather.png'
import contact from './add-user.png'

function Project (){
    return(
        <>
        <div className="pmain">
            <div className="phead">
                <p className="ph">My Project</p>
                <hr className='sline' />
            </div>
            <div className="project">
                <div className="pcon">
                    <div className="pcoa">
                    <img className='pimg' src={SRG} alt="" />
                    </div>
                    <div className="pcoa2">
                       <p> SRG CONTACT US PROJECT</p>

                    </div>
                    </div>
                <div className="pcon">
                    <div className="pcoa">
                    <img className='pimg' src={Shape} alt="" />
                    </div>
                    <div className="pcoa2">
                        <p>GEOMETRY PROJECTS</p>

                    </div>
                    </div>
                <div className="pcon">
                    <div className="pcoa">
                    <img className='pimg' src={weather} alt="" />
                    </div>
                    <div className="pcoa2">
                        <p>WEATHER WEB APP</p>

                    </div>
                    </div>
                <div className="pcon">
                    <div className="pcoa">
                    <img className='pimg' src={contact} alt="" /> 
                    </div>
                    <div className="pcoa2">
                        <p>CREATE ACCOUNT </p>

                    </div>
                    </div>

            </div>
        </div>
        </>
    )
}
export default Project