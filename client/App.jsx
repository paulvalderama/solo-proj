import React, { Component } from 'react';
import StoreItem from './Components/StoreItem.jsx';
import './style.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Cart from './Components/Cart.jsx';
import Store from './Components/Store.jsx';
// import Login from "./containers/Login";

//React is a js library used for building user interfaces specifically for single page apps. It's used for handling view layer for web and mobile apps
//React allows us to create reusable UI components. Allows developers to create large web apps which can change data without reloading the page.
//MAIN PURPOSE: to be fast, scalable, and simple. works only on user interfaces in application. can be used with a combination of other js libraries. 

//React-router-dom rewrites sections of a page rather than loading entire new pages from the server. Makes applications easier to deploy and greatly improves the user experience. a router allows your app to navigate between diff components changing the browser URL, modifying the browser history and keeping the UI state in sync. React router is the most popular routing library for React. It allows you to define routes in the same declarative style

// App is the parent component, sets state, and passes to child components via props. 
class App extends Component {
  constructor(props) {
    super(props);

    //setting state to an object of urls with values of the clothes addresses
    this.state = {
      urls: ['https://cdn.shopify.com/s/files/1/1993/6287/products/mockup-374f82c5_480x480.png?v=1500394266',
        'https://cdn.shopify.com/s/files/1/1125/3450/products/Steph_Curry_Blue_grande.jpg?v=1497312499',
        'https://cdn.shopify.com/s/files/1/1124/3536/products/lebron-james-bron-cry-dad-hat-mens-headwear-any-memes-streetwear_2048x.png?v=1512088348',
        'https://images-na.ssl-images-amazon.com/images/I/61jY2-nZ1CL._UX466_.jpg',
        'http://blog.thegoats.co/wp-content/uploads/2016/09/chicago-bulls-dad-hat-300x223.jpg',
        'https://d1w8c6s6gmwlek.cloudfront.net/surelytees.com/products/266/179/26617998.png',
        'https://www.picclickimg.com/d/l400/pict/172750808993_/Kevin-Durant-Cupcake-Mens-T-shirt-OKC-KD-Golden.jpg',
        'https://ih1.redbubble.net/image.575181809.8735/ra%2Clongsleeve%2Cx925%2Cfafafa%3Aca443f4786%2Cfront-c%2C210%2C180%2C210%2C230-bg%2Cf8f8f8.lite-1.jpg',
        'https://i1.wp.com/theknickswall.com/wp-content/uploads/2017/10/Screen-Shot-2017-10-23-at-12.31.04-AM.png?fit=563%2C558&ssl=1']
        
    };
  }

  //rendering the app, passing in components (test/store) and creating links that lead to the component pages
  render() {
    return (
      //wrapping everything needed to be routed
      <Router>
        <div>
          <h1 className= 'header'>
          {/* creating links, that link to components(test/'/') rewriting a section of the page vs loading entire new pages for the server */}
          <div className='cart' >
            <Link to="/cart">
              <div className = 'cart'>
                Cart
          </div>
            </Link>
            <Link to="/">
              <div className='home' >
                Home
          </div>
            </Link>
          </div>
          </h1>
          {/* switch component to render only the first route that matches the location ('/', '/Test') */}
          <Switch>
              {/* on root path, we render Store */}
            <Route exact path='/' component={Store} />
            <Route exact path='/cart' component={Cart} />
            
          </Switch>
        </div>
      </Router>
    )
  } 
}

//exports app. 
export default App; 
