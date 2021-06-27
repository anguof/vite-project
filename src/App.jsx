import React, { Component, useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(1);

//   useEffect(() => {
//     // setTimeout(() => {
//     //   setCount(2);
//     //   console.log(count);
//     // }, 0);

//     setCount(2);
//     console.log(count);
//   }, []);

//   console.log(count);

//   return <p>{count}</p>;
// }

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
    // this.setState({
    //   count: this.state.count + 1,
    // }); //异步更新：触发额外渲染，在浏览器更新屏幕前
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
    }, 0); //跳过react机制：同步更新
    // console.log(this.state.count);
  }

  render() {
    const { gender, count } = this.state;
    console.log(count);
    return (
      <div>
        <p>{gender}</p>
        <p>{count}</p>
      </div>
    );
  }
}
export default App;
