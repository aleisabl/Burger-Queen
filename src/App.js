import React, {Component} from 'react';
import ComponentButtons from './menu/buttons.js'
import ComponentLogo from './home/logo.js'
import './App.css';

class App extends Component {
  render(){
      return (  
        <React.Fragment>
              <ComponentLogo/>
              <ComponentButtons/>    
        </React.Fragment>
      );
  }
}

export default App;