import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons'

ReactDOM.render(
  <div>
    <Card name={'Abraham'} age={23}/>
    <Card name={'Ariana'} age={24}/>
    <Card name={'Maximus'} age={3}/>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
