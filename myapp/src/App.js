import React from 'react';
import Axios from 'axios';
import { CardList } from './card-list/card-list.component';
import './App.css';
import { SearchBox } from './search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
      this.setState({ monsters: data.data })
    })
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1 className="heading">Monsters of India</h1>

        <SearchBox placeholder="Search  Monsters" handleChange={this.handleChange} />

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
