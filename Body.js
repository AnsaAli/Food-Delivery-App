import React from "react";

// Body
//  -container
//  -card container
//    image,star,cuisine
const CardsItems = () => {
    return (
        <div className="card-container">
            <div className="dish-image">
                <img className="food-image" src="https://img.freepik.com/free-psd/tasty-biriyani-food-social-media-promotion-instagram-banner-post-template-design_84443-3057.jpg?t=st=1720439467~exp=1720443067~hmac=47ace204de8fab62b7634fe12178ece3b5741294b02f4efa138f32e91e205f15&w=740" />
            </div>
            <div className="details">
                <h4>Biriyani Zone</h4>
                <h5>South Indian, Asian</h5>
                <h5>4.4 Star</h5>
                <h5>40 minutes</h5>
            </div>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body-container">
            <div className="Search">
                Search
            </div>
            <div className="card-list">
                <CardsItems />
                <CardsItems />
                <CardsItems />
                <CardsItems />
                <CardsItems />
                <CardsItems />
                <CardsItems />
                <CardsItems />
                <CardsItems />
                <CardsItems />
            </div>
        </div>
    )
}
export default Body;