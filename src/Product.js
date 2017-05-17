import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {

  constructor(props) {
    super(props)

    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/products/' + this.props.match.params.id)
    .then(response => {
      this.setState({
      product: response.data
      })
    })
  }

  render() {
    console.log(this.state.products);
    var {product} = this.state

    return (
      <div>
        <h1>My product</h1>
        <img src= {product.image}/>
        <h1>{product.title}</h1>
        <h5>{product.price}</h5>
        <h5>{product.desc}</h5>
      </div>
    )
  }
}


export default Product
