import React from "react"

function Card(props) {
    return (
        <div className="card">
            {props.item.id != 1 && <hr className="card--divider"/>}
            <div className="card--body">
                <img src={props.item.imageUrl} className="location--img"/>
                <div className="card--text">
                    <div className="card--location">
                        <img src="../Images/Location.svg"/>
                        <h3 className="location--title">{props.item.location}</h3>
                        <a href={props.item.googleMapsUrl} id="link">Link to Google Maps</a>
                    </div>
                    <h1 className="attraction--title">{props.item.title}</h1>
                    <h4 className="card--dates">{props.item.startDate} - {props.item.endDate}</h4>
                    <p className="card--description">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card