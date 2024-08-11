import React, { Component } from "react";

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      wishlist: 0,
      products: [
        {
          name: "Bottle",
          description: "Thandi",
          price: "300",
        },
        {
          name: "Tiffin",
          description: "Garam",
          price: "3000",
        },
        {
          name: "Plate",
          description: "Gol",
          price: "30",
        },
      ],
    };
  }

  getProducts() {
    console.log("get products")
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => this.setState({ products: json }));
  }

  addToCart(productIndex) {
    const cart = this.state.cart;
    cart.push(productIndex);
    this.setState({cart: cart});
  }

  componentDidMount(){
    console.log("Mount")

    this.getProducts()
  }

  componentDidUpdate() {
    console.log("Update")
  }

  render() {
    console.log(this.state)
    return (
      <>
        <nav>
          <div>Logo</div>

          <ul>
            <li>Cart: {this.state.cart.length}</li>
            <li>Wishlist: {this.state.wishlist}</li>
          </ul>
          <div>
            <button>Login</button>
          </div>
        </nav>
        <div>
          {this.state.products.map((product, index) => {
            return (
              <div key={index}>
                <img src={product.image} alt="" style={{height: "100px"}}/>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h3>{product.price}</h3>
                <button onClick={() => this.addToCart(index)}>Add To Cart</button>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
