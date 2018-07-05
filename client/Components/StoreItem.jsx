import React from 'react';

//StoreItem is a component that represents each individual item. 
// it contains scroll down button (<select>), and Add to Cart Button


const StoreItem = props => {
  return(
    <div className="container">
      <div className="btns">
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button type="button" className='btn'>Add To Cart</button>
      </div>
      {/* the img src is passed down from the props of Store.jsx, storeItemUrl represents all the images of product  */}
      <img src={props.storeItemUrl} alt="" styles={{ height: "150px", width: "150px" }}/>
    </div>
  )
    }
 //gets sent to Store.jsx to be accessed as individual items in order to contain all available items   
    export default StoreItem; 
