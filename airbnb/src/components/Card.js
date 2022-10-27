import React from "react";


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

// export default function Card(){
//     return(
//         <div className="card">
//             <img className="card-image" src="" alt="" />
//             <span className="ratings-sec">
//                 <img className="star-img" src="" alt="" />
//                 <span className="rating"></span>
//                 <span className="country"></span>
//             </span>
//             <p>description</p>
//             <span className="price">$    /person</span>
//         </div>
//     )
// }