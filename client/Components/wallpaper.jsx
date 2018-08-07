import React from 'react';

//StoreItem is a component that represents each individual item. 
// it contains scroll down button (<select>), and Add to Cart Button


const Wallpaper = props => {
  return(
    <div className="wallpaper">
      <img className="wallpaper" src='https://images.unsplash.com/photo-1512445181747-57ba1fa4ac83?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c6366f3e66a45b0572c6b96ce5ae83a7&auto=format&fit=crop&w=1051&q=80' alt="" styles={{ height: "150px", width: "150px" }}/>
    </div>
  )
    }
 //gets sent to Store.jsx to be accessed as individual items in order to contain all available items   
    export default Wallpaper; 
