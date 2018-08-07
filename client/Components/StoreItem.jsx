import React from 'react';

//StoreItem is a component that represents each individual item. 
// it contains scroll down button (<select>), and Add to Cart Button

class StoreItem extends React.Component {
  constructor() {
    super();
  };

  select() {
    var e = document.getElementsByClassName("selectBy");
    // console.log(e.options)
    var numItems = e.options[e.selectedIndex].value;
    
    this.props.cart[this.props.StoreItem[this.props.index]] = this.props.numItems;

    console.log(this.props.cart);

    // console.log(e);
    // console.log(numItems);
  }

  //rendering the urls, for each element, push to storeItems []. 
  render() {
    return (
      <div className="container">
        <div className="btns">
          <select className='selectBy'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <button type="button" className='btn' onClick={() => { this.select() }}>Add To Cart</button>
        </div>
        {/* the img src is passed down from the props of Store.jsx, storeItemUrl represents all the images of product  */}
        <img className='product' src={this.props.storeItemUrl} alt="" styles={{ height: "150px", width: "150px" }} />
      </div>
    )
  }
}
//gets sent to Store.jsx to be accessed as individual items in order to contain all available items   
export default StoreItem; 
