import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  render() {
    const { list, handleDetail, handleBuy } = this.props;

    return (
      <div className="row">
        {list.map((item, index) => (
          <ItemShoe
            handleDetail={handleDetail}
            handleAddToCart={handleBuy}
            item={item}
            key={index}
          />
        ))}
      </div>
    );
  }
}
