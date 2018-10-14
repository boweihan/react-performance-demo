import React, { PureComponent } from "react";

class ListItem extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <div
        style={{
          padding: 10,
          margin: 2,
          backgroundColor: "gray",
          color: "white"
        }}
      >
        {item.name}
      </div>
    );
  }
}

export default ListItem;
