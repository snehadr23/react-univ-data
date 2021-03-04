import React, { Component } from 'react';
import './App.css'; 
import Navbar from './components/Navbar';
import PageTitle from './components/PageTitle';
import UnivList from './components/UnivList/UnivList';

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className=''>
      <Navbar/>
      <PageTitle/>
      <UnivList/>
        
      </header>
    </div>
  );
}
}

export default App;
