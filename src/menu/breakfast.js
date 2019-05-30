import React, {Component} from 'react';
import axios from 'axios';
import './menu.css';

const url = 'https://raw.githubusercontent.com/aleisabl/Burger-Queen/master/src/menu/burger-queen.json';

class ComponentBreakfast extends Component {
 // State will apply to the Breakfast object which is set to loading by default
  state = {
    Breakfast: [],
    isLoading: true,
    errors: null
  };
  // Now we're going to make a request for data using axios
  getBreakfast() {
    axios
      // This is where the data is hosted
      .get(url)
      // Once we get a response and store data, let's change the loading state
      .then(response => {
        this.setState({
          Breakfast: response.data.Desayunos,
          isLoading: false
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch(error => this.setState({ error, isLoading: false }));
  }
  // Let's our app know we're ready to render the data
  componentDidMount() {
    this.getBreakfast();
  }

  // Putting that data to use
  render() {
    const { isLoading, Breakfast } = this.state;
    return (
        <div>
          {!isLoading ? (
            Breakfast.map(breakfast => {
              const { _id, name, price, img } = breakfast;
              return (
                <div className="breakfast-div" key={_id}>
                  <h6>{name}</h6>
                  <p>precio: ${price}</p>
                {/*  <a href="#"> */} <img /* onClick={addOne()} */ src={img} alt="icon" width="20px"></img> {/* </a> */}
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
    );
  }
}

export default ComponentBreakfast