import React from "react";

const Basket = ({basketList}) => {
    const displayBasketList = basketList.map((item, index) =>{
        return (
        
        <li key={index}> {item.name} £{item.price} 
        </li>
        );
    });

    return (
        <div>
            <h3> This is your Basket page</h3>
            <ul>{displayBasketList}</ul>
        </div>
    );
};

export default Basket;
