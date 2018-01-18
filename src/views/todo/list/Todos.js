import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import logo from '../../../assets/images/logo.svg';
import './Todos.css';
import AddTodo from '../add/AddTodo';

class Todos extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   Todos: []
    // };
    this.handleComplited = this.handleComplited.bind(this);
    this.handleDel = this.handleDel.bind(this);
    // this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  componentDidMount(){
    fetch('/data/Todos.json',{
      method:'GET',
      headers:{'Content-Type':'application/json'}
    }).then((response)=>{
      // 是否请求成功
      if(response.status >= 200 && response.status <= 300){
        return response;
      }else{
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }).then((response)=>{
      return response.json();
    }).then((data)=>{
      // this.setState({Todos: data});
      this.props.setTodos({Todos: data});
    }).catch((error) => {
      // 请求失败
      console.log('Request failed',error);
    });
  }

  // 完成Todo
  handleComplited(index){
    let Todos = this.props.Todos;
    Todos[index].complited = !Todos[index].complited;
    this.props.setTodos({Todos:[...Todos]});
  }

  // 删除Todo
  handleDel(index){
    let Todos = this.props.Todos;
    Todos.splice(index,1);
    this.props.setTodos({Todos:[...Todos]});
  }

  // // 增加Todo
  // handleAddTodo(newTodo){
  //   let Todos = this.props.Todos;
  //   Todos.push(newTodo);
  //   this.props.setTodos({Todos:[...Todos]});
  // }
  
  render() {
    const {Todos} = this.props;
    return (
        <div className="Todos">
          <Link to="/">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">欢迎来到react学习教程</h1>
            </header>
          </Link>
          <div className="App-intro">
              <ul className="list-group">
                {
                  Todos.map((item,index) => {
                    return (
                      <li className="list-group-item" key={index}>
                        <Link to={`/todo/detail/${item.id}`} style={item.complited ? {textDecoration: 'line-through'} : {}}>
                          {item.title}
                        </Link>
                        <button
                            type="button"
                            className="btn btn-xs btn-danger pull-right marginLeft5"
                            onClick={() => {this.handleDel(index)}}
                            > Delete
                        </button>
                        <button
                            type="button"
                            className="btn btn-xs btn-success pull-right marginLeft5"
                            onClick={() => { this.handleComplited(index) }}
                            > {item.complited ? 'Undo' : 'Complited'}
                        </button>
                      </li>
                    );
                  })
                }
              </ul>
              {/* <AddTodo handleAddTodo={this.handleAddTodo} /> */}
              <AddTodo/>
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
function mapDispatchToProps(dispatch, ownProps) {
  return {
    setTodos: (data) => dispatch({type: 'TODO_LIST', payload: data}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);