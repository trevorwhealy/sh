import React from 'react';

class Checkout extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    var content = '';
    var cart = window.location.search;

    console.log(localStorage.getItem('cart'));

    console.log(cart);
  }

  render() {
    return (
        <form action="" method="POST" id="payment-form">
          <span className="payment-errors">

          </span>

          <div className="form-row">
            <label>
              <span>Card Number</span>
              <input type="text" size="20" data-stripe="number"/>
            </label>
          </div>

          <div className="form-row">
            <label>
              <span>Expiration (MM/YY)</span>
              <input type="text" size="2" data-stripe="exp_month"/>
            </label>
            <span> / </span>
            <input type="text" size="2" data-stripe="exp_year"/>
          </div>

          <div className="form-row">
            <label>
              <span>CVC</span>
              <input type="text" size="4" data-stripe="cvc"/>
            </label>
          </div>

          <input type="submit" className="submit" value="Submit Payment"/>
        </form>
    );
  }
}

export default Checkout;
