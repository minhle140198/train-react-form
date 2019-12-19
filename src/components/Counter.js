import React from 'react';

class Counter extends React.Component {
    // handlePlus = () => {
    //   this.setState({ count : this.state.count + 1})
    // }
    componentDidMount() {
      console.log('component Did Mount');
      console.log('___________________');
    }
    componentDidUpdate(prevProps, prevState) {
      console.log('component Did Update');
      console.log('___________________');
    }
    componentWillUnmount() {
      console.log('component will unmount');
      console.log('___________________');
    }
    render() {
      console.log('render');
  
      return(
        <div className="Counter">
          <h1>Counter: {this.props.count}</h1>
          <button onClick={this.props.handlePlus}>+1</button>
          <button onClick={this.props.handleMinus}>-1</button>
          <button onClick={this.props.handleReset}>reset</button>
        </div>
      )
    }
  }
  
  export default Counter;