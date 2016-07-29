import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory } from 'react-router';


import Title from './Title.jsx';
import Gallery from './Gallery.jsx';
import Cart from './Cart.jsx';

import Checkout from './Checkout.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      items: [],
      contains: false
    };
  }

  // addToCart(item) {
  //
  //   var newValue = this.state.value + item.price;
  //
  //   var oldArray = this.state.items;
  //   var newArray = oldArray.concat(item.name);
  //
  //   this.setState({
  //     value: newValue,
  //     items: newArray
  //   });
  //
  //   // items: ['blue', 'red']
  //   // items: [['blue', 1], ['red', 2]]
  //
  //   var cart = {
  //     value: newValue,
  //     items: newArray
  //   };
  //
  //   localStorage.setItem('cart', JSON.stringify(cart));
  //
  //   console.log(`this.state.value: ${this.state.value}`);
  //   console.log(`this.state.items: ${this.state.items}`);
  // }

  displayCart() {
    return Object.assign({}, this.state);
  }

  add() {
    this.setState({
      contains: true
    })
  }

  componentDidMount() {

    var cart = localStorage.getItem('cart');
    if (cart) {
      console.log('cart found');
    } else {
      console.log('no cart found');
    }

    fetch('users/me', {
      credentials: 'include',
      //mode: 'cors'
    })
    .then(response => {
      return response.json();
    })
    .then(data => {

      // Removes fbid, createdAt, and updatedAt
      var currentUser = {
        id: data.id,
        name: data.name
      };
      console.log('user', currentUser);
    });
  }

  render() {

    return (
      <div className="container-fluid text-center">
        <Title />
        <button onClick={this.add.bind(this)}>yes</button>
        {this.state.contains ?
          <Link to={{pathname: 'checkout'}}>//, query: {cart: localStorage.getItem('cart')}}}>
            <button className="btn btn-success">
              checkout
            </button>
          </Link>
          : <button className="btn disabled"> checkout </button>
        }
        <Gallery addToCart={this.addToCart.bind(this)}/>
        <Cart cart={this.displayCart.bind(this)}/>
      </div>

    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>
    <Route path='checkout' component={Checkout}></Route>
  </Router>
  , document.getElementById('app'));
