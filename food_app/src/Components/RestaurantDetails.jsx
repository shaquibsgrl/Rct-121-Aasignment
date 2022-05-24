import React from 'react'

const RestaurantDetails = ({
    image,
    name,
    cost,
    rating,
    votes,
    reviews,
    cuisine
}) => {
  return (
    <div style={{display:"flex",gap:"2rem",border:"1px solid black",padding:"0.5rem",margin:"2px"}}>
        <div>
            <img style={{width:"50px"}} src={image} alt="loading" />
        </div>
        <div>
            <div>{name}</div>
            <div>{cuisine}</div>
            <div>cost ${cost} for one</div>
        </div>
        <div>
            <div>{rating}</div>
            <div>{votes} votes</div>
            <div>{reviews}reviews</div>
        </div>
      
    </div>
  )
}

export default RestaurantDetails
