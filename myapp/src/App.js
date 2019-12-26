import React from 'react';
import Axios from 'axios';
import { CardList } from './card-list/card-list.component';
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

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
      this.setState({ monsters: data.data })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters of India</h1>
        {/* // Method 2 */}
        <CardList monsters={this.state.monsters}>
          {/*  Method 1 */}
          {/* {
            this.state.monsters.map(monsters => {
              return (<h2 key={monsters.id}>{monsters.name}</h2>)
            })
          } */}
        </CardList>
      </div>
    );
  }
}

export default App;
