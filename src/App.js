import React, { Component } from 'react';
import TodoItem from './Components/TodoItem/TodoItem.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.onRemoveItem = this.onRemoveItem.bind(this)

    this.state = {
      robacaso : ["chiudere", "andare", "via", "altraroba", "dajedaje", "ancorauna", "e basta"]
    }
  }



  onRemoveItem(index) {
    console.log(index);
    this.state.robacaso.splice(index, 1);
    return this.setState({robacaso: this.state.robacaso});
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          { this.state.robacaso.map( (item, index) => { return( <TodoItem key={index} index={index} name={item} onRemoveItem={this.onRemoveItem} /> )} )}

        </div>
      </div>
    );
  }
}

export default App;
