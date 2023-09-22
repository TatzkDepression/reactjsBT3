import React, { Component } from "react";

export default class ItemShoe extends Component {
  handleDetailView = () => {
    this.props.handleDetail(this.props.item);
  };

  handleAddToCart = () => {
    this.props.handleAddToCart(this.props.item);
  };

  render() {
    const { name, price, image } = this.props.item;
    const truncatedName = name.length > 12 ? `${name.slice(0, 12)}...` : name;

    return (
      <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src={image} alt={name} />
          <div className="card-body">
            <h5 className="card-title" onClick={this.handleDetailView}>
              {truncatedName}
            </h5>
            <p className="card-text">Price: ${price}</p>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-info" onClick={this.handleDetailView}>
                View
              </button>
              <button
                className="btn btn-success"
                onClick={this.handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
