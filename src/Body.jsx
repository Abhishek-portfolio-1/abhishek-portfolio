import 'react'
import Photo from './img.jpg'

function Body(){
    return (
        <>
        <div className='body'>
            <img className='reacti' src={Photo} alt="" />
            <div className="con">
            <p className='name' >Abhishek</p>
            
            </div>
            <div className="bcon">
            <p className='name2'>Hello I am Abhishek Create a modern and responsive personal portfolio website <p> with a  section, About , Contact , and Project and Build a simple to-do list app</p> with features to add, delete, and mark tasks as complete. Use local storage to save tasks.  </p>
           
            </div>
        
        </div>
        </>
    )
}
export default Body