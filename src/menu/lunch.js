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
                  <p>Tipo: <b>{type[0]}, {type[1]}, {type[2]}</b></p>
                  <p>{extras[0]} ${extras[1]} <br></br> {extras[2]} ${extras[3]}</p>
                  <a href="#"> <img src={img} alt="icon" width="22px"></img> </a>
                  <hr />
                </div>
              );
            })

          ) : (
            <p>Loading...</p>
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