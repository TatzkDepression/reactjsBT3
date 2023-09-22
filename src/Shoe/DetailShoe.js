import React, { Component } from "react";

export default class DetailShoe extends Component {
  render() {
    const { detail } = this.props;

    return (
      detail && (
        <div>
          <img width={200} src={detail.image} alt="" />
          <h2>{detail.name}</h2>
          <p>Price: ${detail.price}</p>
          <p>Description: {detail.description}</p>
        </div>
      )
    );
  }
}
