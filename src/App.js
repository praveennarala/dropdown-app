import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
           
      cities: [
        "Hyderabad",
        "Delhi",
        "Mumbai"
      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form>
        <div class="center">
          <h1>React Dropdown</h1>
          <p>Select a city</p>
        </div>
        <br />
        

        <label>
          <div class="dropdown centr">
            <button class="dropbtn">Select <i class="fa fa-caret-down"></i></button>
            <div class="dropdown-content">
              {this.state.cities.map(city => (
                <a>
                  {city}
                </a>
              ))}

            </div>
          </div>
        </label>

      </form>
    );
  }
}

export default App;
