import React from 'react';
import { CardList } from './components/card-list/CardList';
import './App.css';
import { SearchField } from './components/search-field/SearchField';

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
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <SearchField
          value={this.state.searchField}
          onChange={this.onSearchFieldChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
