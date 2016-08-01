import React from 'react';

var cartItem = function(id, type, cost) {
  this.id = id;
  this.type = type;
  this.cost = cost;
  this.quantity = 1;
}

var addToCart = (id, type, cost) => {
  var cart = [];
  var currentCart = localStorage.getItem('cart');

  // If no item currently exists in the cart
  if (!currentCart) {
    cart.push(new cartItem(id, type, cost));

    console.log('added item to cart: ', cart);
    localStorage.setItem('cart', JSON.stringify(cart));

  // If items do exist in the cart
  } else {
    cart = JSON.parse(currentCart);
    console.log('items do exist: ', cart);

    var foundInCart = false;

    for (var item of cart) {
      if (item.id === id) {
        item.quantity++;
        foundInCart = true;
      }
    }

    if (!foundInCart) {
      cart.push(new cartItem(id, type, cost));
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }
};


var Item = (props) => (

  <div className="col-md-4 columns">

    <img className="item-picture" src={props.image} />
    <div className="item-description">{props.type} + {props.cost}</div>
    <button onClick={() => { addToCart(props.id, props.type, props.cost); props.showCheckoutButton()}} type="button" className="btn btn-success">Purchase</button>

  </div>

);

export default Item;
