import React from 'react';
import Axios from 'axios';
import { CardList } from './card-list/card-list.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
      this.setState({ monsters: data.data })
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters of India</h1>

        <input type="search" onChange={e => this.setState({ searchField: e.target.value })
        } placeholder="search  monsters" />

        {/* // Method 2 */}
        <CardList monsters={filteredMonsters} />
        {/*  Method 1 */}
        {/* {
            this.state.monsters.map(monsters => {
              return (<h2 key={monsters.id}>{monsters.name}</h2>)
            })
          } */}
      </div>
    );
  }
}

export default App;
