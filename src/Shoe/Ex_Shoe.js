import React, { Component } from "react";
import Cart from "./Cart";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import { shoeArr } from "./Data";
import { message } from "antd";

export default class Ex_Shoe extends Component {
  state = {
    shoeArr: shoeArr,
    detail: shoeArr[0],
    cart: [],
  };

  handleAdd = (shoe) => {
    const { cart } = this.state;
    const index = cart.findIndex((item) => item.id === shoe.id);

    if (index === -1) {
      const newShoe = { ...shoe, soLuong: 1 };
      this.setState({ cart: [...cart, newShoe] });
    } else {
      const updatedCart = [...cart];
      updatedCart[index].soLuong++;
      this.setState({ cart: updatedCart });
    }
  };

  handleRemove = (shoeID) => {
    const { cart } = this.state;
    const updatedCart = cart.filter((item) => item.id !== shoeID);
    this.setState({ cart: updatedCart });

    // thông báo xóa thành công
    message.success("Xóa Thành Công");
  };

  handleViewDetail = (shoe) => {
    this.setState({ detail: shoe });
  };

  handleChangeQuantity = (id, option) => {
    const { cart } = this.state;
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, soLuong: Math.max(0, item.soLuong + option) }
        : item
    );

    this.setState({ cart: updatedCart });
  };

  render() {
    const { cart, detail, shoeArr } = this.state;

    return (
      <div className="row">
        <div className="col-7">
          <Cart
            handleChangeQuantity={this.handleChangeQuantity}
            handleDelete={this.handleRemove}
            cart={cart}
          />
        </div>
        <div className="col-5">
          <ListShoe
            handleDetail={this.handleViewDetail}
            handleBuy={this.handleAdd}
            list={shoeArr}
          />
          <DetailShoe detail={detail} />
        </div>
      </div>
    );
  }
}
