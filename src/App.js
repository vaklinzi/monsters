import React from 'react';
import { CardList } from './components/card-list/CardList';
import { SearchField } from './components/search-field/SearchField';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchFieldChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { searchField, monsters } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchField
          placeholder="search monsters"
          handleChange={this.onSearchFieldChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
