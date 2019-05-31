import React, {Component} from 'react';
import './menu.css';

class ComponentNameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Mesa de ' + this.state.value + ' enviada a cocina exitosamente');
      event.preventDefault();
    }
  
    render() {
      return (

      /*   <form className="nameForm" onSubmit={this.handleSubmit}>
  <div class="form-row">
    <div class="col">
      <input type="text" value={this.state.value} onChange={this.handleChange}class="form-control" placeholder="First name">
    </div>
  </div>
</form> */

        <form onSubmit={this.handleSubmit}>
          <label className="nameForm">
          <h6> Nombre del cliente: </h6> 
            <input type="text" className="form-control"  value={this.state.value} onChange={this.handleChange} />
          </label>
          <label className="tableForm">
          <h6>Productos: </h6>
          <p></p>
          </label>
          
          <input className="btn btn-outline-info btn3" type="submit" value="Enviar" />
        </form>
      );
    }
  }

  export default ComponentNameForm;