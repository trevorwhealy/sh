import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="cart">
        <h3> Cart </h3>
          <h2> Total: {this.props.cart().value} </h2>
          <div>
            {this.props.cart().items.map(item => <div> {item} </div> )}
          </div>
          {console.log(this.props.cart().items)}
      </div>
    );
  }

}

export default Cart;
