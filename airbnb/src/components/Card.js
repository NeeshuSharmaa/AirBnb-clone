import React from "react";


// via props 
export default function Card(props){

    let badgeText
    if(props.openSpots=== 0){
        badgeText="SOLD OUT"
    }
    else if(props.location ==="Online"){
        badgeText="ONLINE"
    }


    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={`images/${props.img}`} alt="" />
            <span className="ratings-sec">
                <img className="star-img" src="images/star.png" alt="" />
                <span className="rating">{props.rating} </span>
                <span className="count">({props.count}) ● </span>
                <span className="country">{props.location}</span>
            </span>
            <span className="title">{props.title}</span>
            <div>
            <span className="price">From ${props.price}</span> <span className="normal-span-text">/ person</span>
            </div>
            
        </div>
    )
}
