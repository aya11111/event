import "./overview.css"

function Overview({icon, title, description}){

    return(
        <>
            <div className="overview col-md-4 col-sm-6 col-xs-12">
                <div className="icon">
                    {icon}
                </div>
                <h3 className="title">{title}</h3>
                <p className="desc">{description}</p>
            </div>
        </>
    )
}
export default Overview;