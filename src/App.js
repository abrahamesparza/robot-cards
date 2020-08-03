import React, { Component } from 'react';

import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

import { robots } from './components/robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      query: ''
    }
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    let { query } = this.state;
    let filtered = robots.filter(robot => {
      return robot.name.toLowerCase().includes(query.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1>ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filtered} />
      </div>
    )
  }
}

export default App;