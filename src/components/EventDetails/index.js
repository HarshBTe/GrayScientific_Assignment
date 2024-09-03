import { useContext } from "react"
import { counterContext } from "../../context/context"
import './index.css'

const EventDetails = () => {
    const title = useContext(counterContext)
    
    return(
        <div className="event-container">
           <h2> {title}  </h2>   
        </div>
    )

}

export default EventDetails