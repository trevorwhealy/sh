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

  displayCart() {
    //return this.state;
    return Object.assign({}, this.state);
  }

  add() {

    var cart = JSON.parse(localStorage.getItem('cart'));

    var calculateTotalCost = (cartArray) => {
      var total = 0;
      for (var cartItem of cartArray) {
        console.log(cartItem);
        total += cartItem.cost * cartItem.quantity;
      }
      return total;
    };

    this.setState({
      contains: true,
      value: calculateTotalCost(cart)
    })
  }

  componentDidMount() {

    var cart = localStorage.getItem('cart');
    if (cart) {
      this.setState({
        contains: true
      });
    }

    fetch('users/me', {
      credentials: 'include',
      //mode: 'cors'
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      // Foregoes fbid, createdAt, and updatedAt
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
        {this.state.contains ?
          <Link to={{pathname: 'checkout'}}>
            <button className="btn btn-success">
              <i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
            </button>
          </Link>
          : <button className="btn disabled">
              <i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
            </button>
        }
        <Gallery showCheckoutButton={this.add.bind(this)}/>
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


  /* Notes to self:

  React Router Links can take GET Parameters:
    <Link to={{pathname: 'checkout'}}>, query: {cart: localStorage.getItem('cart')}}}>

  */
