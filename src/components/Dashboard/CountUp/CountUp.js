import React, { Component } from "react";

class CountUp extends Component {
  state = {
    diffStr: ""
  };
  componentDidMount() {
    setInterval(() => {
      let diffstring =
        (new Date().getTime() - this.props.start.getTime()) / 1000;
      diffstring = diffstring.toFixed(0);
      this.setState({ diffStr: diffstring + " seconds live" });
    });
  }
  render() {
    return <span>{this.state.diffStr}</span>;
  }
}

export default CountUp;
