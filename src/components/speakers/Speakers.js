import "./speakers.css"
function Speakers({img, alt, name, job }){
    return(
        <>
            <div className="speaker">
                <img src={img} alt={alt}/>
                <p className="name">{name}</p>
                <p className="job">{job}</p>
            </div>
        </>
    )
}
export default Speakers