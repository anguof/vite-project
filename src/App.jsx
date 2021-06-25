import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      gender: "male",
    };
  }

  componentDidMount() {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
    }, 0);
    // console.log(this.state.count);
  }

  render() {
    const { gender, count } = this.state;
    return (
      <div>
        <p>{gender}</p>
        <p>{count}</p>
      </div>
    );
  }
}
export default App;
