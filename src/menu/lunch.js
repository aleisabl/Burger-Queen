import React, {Component} from 'react';
import axios from 'axios';
import './menu.css';


const url = 'https://raw.githubusercontent.com/aleisabl/Burger-Queen/master/src/menu/burger-queen.json';

class ComponentLunch extends Component {
 // State will apply to the Lunch object which is set to loading by default
  state = {
    Lunch: [],
    SideDish: [],
    Beverage: [],
    isLoading: true,
    errors: null
  };
  // Now we're going to make a request for data using axios
  getLunch() {
    axios
      // This is where the data is hosted
      .get(url)
      // Once we get a response and store data, let's change the loading state
      .then(response => {
        this.setState({
          Lunch: response.data.Hamburguesas,
          SideDish: response.data.Acompañamientos,
          Beverage : response.data.Bebidas,
          isLoading: false
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch(error => this.setState({ error, isLoading: false }));
  }
  // Let's our app know we're ready to render the data
  componentDidMount() {
    this.getLunch();
  }

  // Putting that data to use
  render() {
    const { isLoading, Lunch, SideDish, Beverage } = this.state;
    return (
        <div className="lunch-div">
          {!isLoading ? (
            Lunch.map(lunch => {
              const { _id, name, price, type, img, extras } = lunch;
              return (
                <div key={_id}>
                  <h6>{name}</h6>
                  <p>Precio: ${price}</p>
                  <h6>Tipos de carne:</h6>
                  <b>{type[0]}</b><input className="form-check-input " type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></input>
                  <br></br>
                  <b>{type[1]}</b><input className="form-check-input " type="checkbox" id="blankCheckbox" value="option2" aria-label="..."></input>
                  <br></br>
                  <b>{type[2]}</b><input className="form-check-input " type="checkbox" id="blankCheckbox" value="option3" aria-label="..."></input>  
                  <br></br> <br></br>
                  <h6>Extras:</h6>
                  <p> <b>{extras[0]}</b> ${extras[1]} <input className="form-check-input " type="checkbox" id="blankCheckbox" value="option4" aria-label="..."></input>
                   <br></br>
                  <b>{extras[2]}</b> ${extras[3]} <input className="form-check-input " type="checkbox" id="blankCheckbox" value="option5" aria-label="..."></input> </p>
                  <a href="#"> <img src={img} alt="icon" width="22px"></img> </a>
                  <hr />
                </div>
              );
            })

          ) : (
            <p>Cargando el menú...</p>
          )}

             { SideDish.map(sidedish => {
              const { _id, name, price, img } = sidedish;
              return (
                <div key={_id}>
                  <h6>{name}</h6>
                  <p>precio: ${price}</p>
                  <a href="#"> <img src={img} alt="icon" width="22px"></img> </a>
                  <hr />
                </div>
              );
            })}

              { Beverage.map(beverage => {
              const { _id, name, price, img } = beverage;
              return (
                <div key={_id}>
                  <h6>{name}</h6>
                  <p>precio: ${price}</p>
                  <a href="#"> <img src={img} alt="icon" width="22px"></img> </a>
                  <hr />
                </div>
              );
            })}

            

        </div>
    );
  }
}

export default ComponentLunch