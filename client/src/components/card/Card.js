const Card = ({job}) => {
    return (
        <div className="card-component">
            <div className="content-container">
                <div className="logo-wrapper">
                    <img src="//placehold.it/300x300" alt="" className="logo"/>
                </div>
                <div className="info">
                    <span className="title">{job.name}</span>
                    <span className="position">{job.position}</span>
                    <span className="tag">{job.norm}</span>
                </div>
            </div>
            <div className="details">
                <div className="details-wrapper">
                    <img src="" alt="" className="icon"/>
                    <span className="highlight">{job.location}</span>
                </div>
                <div className="details-wrapper">
                    <img src="" alt="" className="icon"/>
                    <span className="highlight">5 days ago</span>
                </div>
            </div>
        </div>
    )
}

export default Card
