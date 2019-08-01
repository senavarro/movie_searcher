import React, {Component} from 'react';

import {Home} from './pages/home'
import {Detail} from './pages/detail'


import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
 
  render() {
    const url = new URL(document.location)
    const Page = url.searchParams.has('id')
    ? <Detail id={url.searchParams.get('id')} />
    : <Home />

    return (
      <div className="App">
        {Page}
      </div>
    );
  }
}

export default App;
