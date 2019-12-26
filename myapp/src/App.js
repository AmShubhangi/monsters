import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: 'Dracula', id: 1 },
        { name: 'Tejal', id: 2 },
        { name: 'Abhishek', id: 3 },
        { name: 'Mansi', id: 4 },
        { name: 'Rahul', id: 5 },
        { name: 'Shakuni(Jaydip)', id: 6 },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Monsters of India</h1>
        {
          this.state.monsters.map(monsters => {
            return (<h2 key={monsters.id}>{monsters.name}</h2>)
          })
        }
      </div>
    );
  }
}

export default App;
