import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import '../css/app.css';

import { robots } from '../components/robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      query: ''
    }
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    let url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({ robots: data })
    })
    .catch(err => {
      console.log('err:',err)
    })
  }

  onSearchChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    let { robots, query } = this.state;
    let filtered = robots.filter(robot => {
      return robot.name.toLowerCase().includes(query.toLowerCase());
    })
    return !robots.length ? <h1 className='f2 washed-blue'>LOADING...</h1> :
    (
      <div className='tc'>
        <h1 className='f2 washed-blue'>ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
        <CardList robots={filtered} />
        </Scroll>
      </div>
    )
}
}

export default App;