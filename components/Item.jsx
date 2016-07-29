import React from 'react';

var addToCart = (id, type, cost) => {
  var cart;
  var currentCart = localStorage.getItem('cart');

  // If no item currently exists in the cart
  if (!currentCart) {
    cart = [
      {
        id: id,
        type: type,
        cost: cost,
        quantity: 1
      }
    ];

    localStorage.setItem('cart', JSON.stringify(cart));

  // If items do exist in the cart
  } else {
    cart = JSON.parse(currentCart);

    console.log(cart);
    //
    // for (var cartItem in cart) {
    //   if (cartItem.id === id) {
    //     cartItem.quantity++;
    //   }
    // }
    //
    // console.log(cart);
  }

  //console.log(currentCart);

  // var cart = localStorage.getItem('cart');
  // if (cart) {
  //   console.log(JSON.parse(cart));
  //   console.log('found');
};

var Item = (props) => (

  <div className="col-md-4 columns">
    {console.log(props.cost)}
    {console.log(props.type)}
    {console.log(props.image)}
    {console.log(props.id)}

    <img className="item-picture" src={props.image} />
    <div className="item-description">{props.type} + {props.cost}</div>
    <button onClick={() => addToCart(props.id, props.type, props.cost)} type="button" className="btn btn-success">Purchase</button>

    {
      /*
      <img className="item-picture" src={props.tag.img}/>
      <div className="item-description"> {props.tag.name}</div>

      <button onClick={() => props.addToCart(props.tag)} type="button" className="btn btn-success">Purchase</button>
    */
    }
  </div>

);

export default Item;
