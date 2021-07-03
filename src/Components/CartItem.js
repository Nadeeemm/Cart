import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Phone",
      price: 999,
      qty: 1,
      img: "",
    };
  }
  decreaseQuantity = () => {
    this.setState((prevState) => {
      return {
        qty: prevState.qty -1,
      };
    });
  };

  increaseQuantity = () => {
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  delete = () => {
    console.log("Quantity Deleted");
  };

  render() {
    const { title, price, qty, img } = this.state;
    return (
      <div>
        <div className="cart-item">
          <div className="left-block">
            <img style={styles.image} alt="" />
          </div>

          <div className="right-block">
            <div style={{ fontSize: "25px" }}>Name: {title}</div>
            <div style={{ color: "grey" }}>Price: {price}</div>
            <div style={{ color: "#777" }}>Quatity: {qty}</div>

            <div className="cart-item-actions">
              <img
                className="action-icons"
                alt="decrease"
                src="https://image.flaticon.com/icons/png/512/992/992683.png"
                onClick={this.decreaseQuantity}
              />
              <img
                className="action-icons"
                alt="increase"
                src="https://image.flaticon.com/icons/png/512/992/992651.png"
                onClick={this.increaseQuantity}
              />
              <img
                className="action-icons"
                alt="delete"
                src="https://image.flaticon.com/icons/png/512/216/216658.png"
                onClick={this.delete}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
    background: "#ccc",
  },
};

export default CartItem;
