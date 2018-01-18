import React, { Component } from 'react';
import './Test.css';

const Button = ({setNewNumber}) => {
  return (
    <button
      type="button"
      className="btn btn-success"
      onClick={() => {setNewNumber();}}
      >INCREMENT
    </button>
  )
}

class Content extends Component {

  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }
  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

  render() {
    return (
      <div className="code">
        <code>{this.props.data}</code>
      </div>
    );
  }
  
}

class Test extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: 0
    };
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber(){
    this.setState({data: this.state.data + 1});
  }
  
  render() {
    return (
        <div className="test">
          <h2>React 组件生命周期</h2>
          <p><code>打开控制台观察规律</code></p>
          <Button setNewNumber={this.setNewNumber}/>
          <Content data={this.state.data}/>
        </div>
    );
  }
}

export default Test;