import logo from './logo.svg';
import './App.css';
import {React, Component} from 'react';
import Search from './compoents/Search';
import List from './compoents/List'

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.setState(this.state)
  // }

  // state = {
  //   isFirst: false,
  //   isLoading: false,
  //   users: [],
  //   err: '',
  // }

  constructor(props) {
    super(props);
    // 不需要在构造函数中调用 setState
    this.state = {
      isFirst: true,
      isLoading: false,
      users: [],
      err: '',
    };
  }
  
  updateState = (stateObj)=> {
    this.setState(stateObj)
  }

  render(){
    // const { isFirst, isLoading, users, err } = this.state; // 解构出状态
    const state = this.state
    return (
      <div class="container">
        <Search state={state} updateState={this.updateState}/>
        <List state={state} updateState={this.updateState}/>
      </div>
    );
  }
  
}

