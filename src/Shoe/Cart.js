import React, { Component } from "react";

export default class Cart extends Component {
  handleQuantityChange = (item, increment) => {
    this.props.handleChangeQuantity(item.id, increment);
  };

  handleDeleteItem = (itemId) => {
    this.props.handleDelete(itemId);
  };

  render() {
    const { cart } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <img width={100} src={item.image} alt="" />
              </td>
              <td>
                <button
                  onClick={() => this.handleQuantityChange(item, -1)}
                  className="btn btn-danger"
                >
                  -
                </button>
                <strong className="mx-2">{item.soLuong}</strong>
                <button
                  onClick={() => this.handleQuantityChange(item, 1)}
                  className="btn btn-dark"
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => this.handleDeleteItem(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
