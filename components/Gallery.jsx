import React from 'react';
import Item from './Item.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  componentWillMount() {
    fetch('db', {
      credentials: 'include'
    })
    .then(response => {
      return response.json();
    })
    .then(data => {

      // Removes createdAt and updatedAt
      var dbItems = data.items.map(item => {
        return {
          id: item.id,
          cost: item.cost,
          image: item.image,
          type: item.type
        }
      });

      this.setState({
        items: dbItems
      })
      //console.log('items', dbItems);
    })
  }

  render() {
    return (

      <div className="gallery">
        <div className="row">
          {this.state.items.map( item =>
            <Item
              showCheckoutButton={this.props.showCheckoutButton}
              key={item.id}
              id={item.id}
              cost={item.cost}
              type={item.type}
              image={item.image}
              addToCart={this.props.addToCart}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Gallery;
