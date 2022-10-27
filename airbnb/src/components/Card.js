import React from "react";


// via props 
export default function Card(props){
    return(
        <div className="card">
            <img className="card-image" src={`images/${props.img}`} alt="" />
            <span className="ratings-sec">
                <img className="star-img" src="images/star.png" alt="" />
                <span className="rating">{props.rating} </span>
                <span className="count">({props.count}) ● </span>
                <span className="country">{props.country}</span>
            </span>
            <span className="title">{props.title}</span>
            <div>
            <span className="price">From {props.price}</span> <span className="normal-span-text">/ person</span>
            </div>
            
        </div>
    )
}
