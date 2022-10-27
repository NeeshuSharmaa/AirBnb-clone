import React from "react";


// via props 
export default function Card(props){

    let badgeText
    if(props.item.openSpots=== 0){
        badgeText="SOLD OUT"
    }
    else if(props.item.location ==="Online"){
        badgeText="ONLINE"
    }


    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={`images/${props.item.coverImg}`} alt="" />
            <span className="ratings-sec">
                <img className="star-img" src="images/star.png" alt="" />
                <span className="rating">{props.item.stats.rating} </span>
                <span className="count">({props.item.reviewCount}) ● </span>
                <span className="country">{props.item.location}</span>
            </span>
            <span className="title">{props.item.title}</span>
            <div>
            <span className="price">From ${props.item.price}</span> <span className="normal-span-text">/ person</span>
            </div>
            
        </div>
    )
}
