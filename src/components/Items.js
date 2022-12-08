
import React from "react";
import {useState} from 'react';

const Items = ({items, handleSelectedItem}) => {

    // const handleClick = (event) =>{
    const handleClick = (event, item) =>{
        event.preventDefault();
        // handleSelectedItem(event)
        handleSelectedItem(item);
        
    };


    const ListItems = items.map((item, index) =>{
        return (
        
        <li key={index}> {item.name} £{item.price} 
       {/* <button id={item} value={item.name} onClick={handleClick}>Add to basket</button> */}
       <button id={item} value={item.name} onClick={(e) => handleClick(e, item)}>Add to basket</button>
        </li>
        );
    });

    
    return (
        <div>
            <h2> Christmas Necessities</h2>
            <ul>
                {ListItems}
            </ul>
        </div>
    )
};

export default Items;
