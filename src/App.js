import React, { Component } from 'react';
import Dropdown1 from './components/Dropdown/Dropdown1';
import Dropdown2 from './components/Dropdown/Dropdown2';
import Sidebar from './components/Navigation/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        
       <Dropdown1/> 
       <Dropdown2/> 
<Sidebar/>
      
        
      </div>
    );
  }
}

export default App;


