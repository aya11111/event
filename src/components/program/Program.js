import "./program.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'
function Program({img, alt, time, room, title, author, description}){
    return(
        <>
            <div className="program">
                <div className="image">
                    <img src={img} alt={alt}/>
                </div>
                <div className="details">
                    <div className="time-room">
                        <span><FontAwesomeIcon icon={faClock}/>{time}</span>
                        <span><FontAwesomeIcon icon={faLocationDot}/>{room}</span>
                    </div>
                    <p className="title">{title}</p>
                    <p className="author">by: {author}</p>
                    <p className="description">{description}</p>
                </div>
            </div>
        </>
    )
}
export default Program;