import React, {Component} from 'react';
import './menu.css';
import ComponentBreakfast from './breakfast.js'
import ComponentLunch from './lunch.js'
import ComponentNameForm from './nameForm.js'

class ComponentButtons extends Component {

      constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
      

    render() {
      return (

        <React.Fragment>

        <div className="rectangle">
        <button type="button" onClick={this.handleClick} className="btn btn-outline-info one">Menú</button> 
        <button type="button" onClick={this.handleClick} id="btn2" className="btn btn-outline-info">Cocina</button>
        </div>

        <div className="rectangle2">
        {this.state.isToggleOn ? <ComponentBreakfast/> : null}
        {this.state.isToggleOn ? <ComponentLunch/> : null}
        </div>     

        <div className="rectangle3">
        <ComponentNameForm/>
       {/*  <form>
              <label>
                Nombre:
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
            </form> */}
        </div> 

        </React.Fragment>
      );
    }
  }
  





export default ComponentButtons;