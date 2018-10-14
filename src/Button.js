import React, { PureComponent } from "react";

class Button extends PureComponent {
  render() {
    const { onClick, style } = this.props;
    return (
      <button onClick={onClick} style={style}>
        Render
      </button>
    );
  }
}

export default Button;
