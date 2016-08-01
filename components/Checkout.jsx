import React from 'react';
import swal from 'sweetalert';

import StripeCheckout from 'react-stripe-checkout';


class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: []
    }
  }

  onToken(token){
    console.log(token);
    token.cartTotal = this.state.cartTotal;
    console.log(token);
    fetch('stripe', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(token)
    })
    .then(res => res.text())
    .then(data => {
      console.log(data); // should show succeess if it worked
      if (data === 'success') {
        swal({
          title: 'Purchase Complete!',
          text: 'Check your email for confirmation',
          type: 'success',
          showConfirmButton: false
        });
        setInterval(() => {
          window.location = '/';
        }, 3000)
        localStorage.clear();
      }
    });
  }

  componentDidMount() {
    var content = '';

    var cart = JSON.parse(localStorage.getItem('cart'));
    var cartTotal = 0;

    cart.forEach((item, i) => {
      item.total = item.cost * item.quantity;
      cartTotal += item.total;
    })

    console.log(cartTotal);


    this.setState({
      cartTotal: cartTotal,
      cart: cart
    })
    //console.log(JSON.parse(cart));
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center"> Cart </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Type</th>
              <th>Cost</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {console.log(this.state.cart)}
            {this.state.cart.map((item, i) => {

              return (
                <tr>
                  <th scope="row">{i}</th>
                  <td>{item.type}</td>
                  <td>{item.cost}</td>
                  <td>{item.quantity}</td>
                  <td>{item.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <StripeCheckout
          token={this.onToken.bind(this)}
          stripeKey="pk_test_SROSs1syQHZsV39VXpBfVzax"
          >
          <button className='btn btn-info'>Checkout</button>
        </StripeCheckout>
      </div>
    );
  }
}

export default Checkout;

// name="Qualitee"
// description="Quality Tee Made with <3 For you"
// image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
// panelLabel="Purchase for "
// amount={this.state.cartTotal * 100}
// currency="USD"
// // Note: Enabling either address option will give the user the ability to
// // fill out both. Addresses are sent as a second parameter in the token callback.
// shippingAddress={false}
// billingAddress={false}
