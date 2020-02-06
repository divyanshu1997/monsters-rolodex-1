import React, {Component} from 'react';

import {CardList} from './components/cardlist/cardlist.component';

import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
    }

    //this.handlechange = this.handlechange.bind(this);
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters:users}));
  }

  handlechange = (e) => {
    this.setState({searchField : e.target.value});
  }


  render(){

    const { monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    
      return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox 
             placeholder="Search Monsters" 
             handleChange = {this.handlechange
         }/>
          <CardList monsters = {filteredMonsters}>
        
          </CardList>
          
          
        </div>
      );
    
  }

  
}
export default App;
