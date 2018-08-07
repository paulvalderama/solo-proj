import React from 'react';
import StoreItem from './StoreItem.jsx';
import wallpaper from './wallpaper.jsx';

//Store contains state of urls

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: ['https://cdn.shopify.com/s/files/1/1993/6287/products/mockup-374f82c5_480x480.png?v=1500394266',
        'https://cdn.shopify.com/s/files/1/1125/3450/products/Steph_Curry_Blue_grande.jpg?v=1497312499',
        'https://cdn.shopify.com/s/files/1/1124/3536/products/lebron-james-bron-cry-dad-hat-mens-headwear-any-memes-streetwear_2048x.png?v=1512088348',
        'https://images-na.ssl-images-amazon.com/images/I/61jY2-nZ1CL._UX466_.jpg',
        'http://blog.thegoats.co/wp-content/uploads/2016/09/chicago-bulls-dad-hat-300x223.jpg',
        'https://d1w8c6s6gmwlek.cloudfront.net/surelytees.com/products/266/179/26617998.png',
        'https://www.picclickimg.com/d/l400/pict/172750808993_/Kevin-Durant-Cupcake-Mens-T-shirt-OKC-KD-Golden.jpg',
        'https://ih1.redbubble.net/image.575181809.8735/ra%2Clongsleeve%2Cx925%2Cfafafa%3Aca443f4786%2Cfront-c%2C210%2C180%2C210%2C230-bg%2Cf8f8f8.lite-1.jpg',
        'https://i1.wp.com/theknickswall.com/wp-content/uploads/2017/10/Screen-Shot-2017-10-23-at-12.31.04-AM.png?fit=563%2C558&ssl=1'],
      cart: {}
    };
  }

  //rendering the urls, for each element, push to storeItems []. 
  render() {
    let storeItems = [];

    for (var i = 0; i < this.state.urls.length; i++) {
      storeItems.push(<StoreItem storeItemUrl={this.state.urls[i]} key={i} index={i} />)
    }

    // let img = 'https://images.unsplash.com/photo-1512445181747-57ba1fa4ac83?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c6366f3e66a45b0572c6b96ce5ae83a7&auto=format&fit=crop&w=1051&q=80';

    // passing storeItems, setting the id to 'storeItemContainer'
    return (

      <div>
        <div className="wallpaper">

          <img className='wallpic' src="https://images.unsplash.com/photo-1512445181747-57ba1fa4ac83?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c6366f3e66a45b0572c6b96ce5ae83a7&auto=format&fit=crop&w=1051&q=80" alt="" />
        </div>

        <div className='flex-container'>
          {storeItems}
        </div>
      </div>
    )

    {/* <div id= 'storeItemContainer'>
</div> */}

  }
}

//exports to app.jsx , where it is rendered when a request is made to '/'. 
export default Store; 
