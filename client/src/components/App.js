import React, {Component} from 'react';
import '../styles/App.css';
import Server from './Server.js'

class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>Watonomous Server Status</h1>
        <div id="server-grid">
          <Server name="Rugged" ip="129.97.175.89" />
          <Server name="Wato1" ip="192.97.228.190" />
          <Server name="Wato2" ip="129.97.228.191" />
          <Server name="Wato3" ip="129.97.228.192" />
          <Server name="Wato-NUC" ip="129.97.175.89" />
        </div>
      </div>
    )
  }
}

export default App;
