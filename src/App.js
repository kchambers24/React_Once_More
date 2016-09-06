import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import GetCityContainer from './GetCityContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="cleverTitle">
          <h1>Clever Title</h1>

        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
