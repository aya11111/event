import "./sponsor.css"
function Sponsor({src, alt}){
    return(
        <>
            <div className="sponsor col-md-3 col-sm-6 col-xs-12">
                <img src={src} alt={alt}/>
            </div>
        </>
    )
}
export default Sponsor;