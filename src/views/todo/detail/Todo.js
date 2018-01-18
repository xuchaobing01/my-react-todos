import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import logo from '../../../assets/images/logo.svg';
import './Todo.css';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      Todo:{},
    };
  }

  componentDidMount(){

    // // 请求数据
    // fetch('/data/Todos.json',{
    //   method:'GET',
    //   headers:{'Content-Type':'application/json'}
    // }).then((response)=>{
    //   // 是否请求成功
    //   if(response.status >= 200 && response.status <= 300){
    //     return response;
    //   }else{
    //     var error = new Error(response.statusText);
    //     error.response = response;
    //     throw error;
    //   }
    // }).then((response)=>{
    //   return response.json();
    // }).then((data)=>{
    //   if(data){
    //     let id = Number(this.props.match.params.id)
    //     let Todo = {};
    //     data.map((item,index) => {
    //       if(item.id === id){
    //         Todo = item;
    //       }
    //       return Todo;
    //     });
    //     this.setState({Todo: Todo});
    //   }else{
    //     console.log('Request failed',data);
    //   }
    //   this.setState({Todos: data});
    // }).catch((error) => {
    //   // 请求失败
    //   console.log('Request failed',error);
    // });

    let id = Number(this.props.match.params.id)
    let Todo = {};
    const {Todos} = this.props;
    Todos.map((item,index) => {
      if(item.id === id){
        Todo = item;
      }
      return Todo;
    });
    this.setState({Todo: Todo});
  }

  render() {
    return (
      <div className="Todo">
        <Link to="/" >
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">欢迎来到react学习教程</h1>
            </header>
        </Link>
        <div className="App-intro">
            {this.state.Todo.id ?
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2>{this.state.Todo.title}</h2>
                    </div>
                    <div className="panel-body">{this.state.Todo.content}</div>
                </div>
                :
                <div className="well ">
                    <h2>暂无数据</h2>
                </div>
            }
            <code><Link to="/Todos" >Todos</Link></code>
        </div>
    </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    Todos: state.todo.Todos
  }
}

export default connect(mapStateToProps)(Todo);