import React, { Component } from 'react';
import {connect} from 'react-redux';
import './AddTodo.css';

const newTodo = {"id": null,"title": "","content": "","complited": false};

class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTodo: newTodo
    };
    // this.handleAdd = this.handleAdd.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.required = this.required.bind(this);
  }

  // 增加Todo
  handleAddTodo(){
    let Todos = this.props.Todos;
    Todos.push(this.state.newTodo);
    this.props.setTodos({Todos: [...Todos]});
    this.setState({newTodo: newTodo})
  }

  // handleAdd(){
  //   this.props.handleAddTodo(this.state.newTodo);
  //   this.setState({newTodo: {"id": null,"title": "","content": "","complited": false}});
  // }

  handleChange(e){
    this.setState({newTodo:{"id": null,"title": e.target.value,"content": "","complited": false}});
  }

  required(){
    return this.state.newTodo.title === '';
  }

  render() {
    return (
        <div className="AddTodo">
          <form className="form" >
            <div className="form-group">
                <label htmlFor="firstname" className="control-label">Todo</label>
                <input
                    type="text"
                    className="form-control todo-add"
                    id="firstname"
                    placeholder="AddTodo Content"
                    value={this.state.newTodo.title}
                    onChange={this.handleChange}
                    autoComplete="off" />
            </div>
            <div className="form-group">
                <button
                    type="button"
                    className={this.required() ? 'btn btn-default' : 'btn btn-success'}
                    onClick={this.handleAddTodo}
                    disabled={this.required()}
                     >addTodo
                </button>
            </div>
          </form>
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

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);