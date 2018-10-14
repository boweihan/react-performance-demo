import React, { Component } from "react";
import List from "./List";
import Button from "./Button";

const buildItems = () => {
  let items = [];
  for (let i = 0; i < 20000; i++) {
    items.push({ name: i });
  }
  return items;
};

class App extends Component {
  state = {
    items: buildItems()
  };

  reRender = () => {
    this.setState({ items: this.state.items });
  };

  render() {
    const { items } = this.state;

    return (
      <div className="App">
        <Button
          onClick={() => {
            this.setState({ items: this.state.items });
          }}
          style={{ margin: 2, backgroundColor: "black", color: "white" }}
        >
          Render
        </Button>
        <List items={items} />
      </div>
    );
  }
}

export default App;
