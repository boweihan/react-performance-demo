import React, { PureComponent } from "react";
import ListItem from "./ListItem";

class List extends PureComponent {
  render() {
    const { items } = this.props;
    return items.map(item => <ListItem key={item.name} item={item} />);
  }
}

export default List;
