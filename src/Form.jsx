import 'react'
import './Form.css'

function Form(){
    return(
        <>
        <div className="fmain">
            <div className="fhead">
                <p>Contact Us</p>
                <hr className='fline'/>
            </div>
            <div className="fcon">
                <form className='text-c' action="">
                    
                    <input className='text-f' type="text" placeholder='Your Name' /><br />
                     <input className='text-f' type="text" placeholder='Your Email' /><br />
                     <textarea rows="4" className='text-t' cols="50" name="comment" form="usrform" placeholder='Your Messsge' ></textarea>
                     <br />
                     <button className='but'>Send Message</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Form