/* import libraries, modules, or files we wish to use in this file */
import React, { Component } from "react"; /* this allows to declare Component instead of React.Component */
import axios from "axios"; /* axios is an http request client */
import { catalog } from './Catalog.module.scss'; /* this provides the styles attached to .catalog */

class NameSearch extends Component { /* we decalre our own component named NameSearch that inherits from the built-in Component */
  constructor(props) {
    super(props); /* constructor and super are typically used together to create an object within a class. When we inherit, we create an instance of a parent and need to make sure all of hte parent functionality is good to go beofre we add 'more' on top in our instance */
    this.state = { /* create variable to be passed around our methods */
      value: '', /* a place to capture the user input */
      cards: [] /* an array to hold the search results */
    };


    this.baseState = this.state;
    this.handleChange = this.handleChange.bind(this); /* attach the object we are currently working with and access this by a simpler name */
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchCardsByName(value) { /* handleSubmit will pass a value to search for */
    this.setState({ loading: true }); /* set a variable to display a loading message / icon */
    this.setState({ noData: false }); /* set a variable to display a no results message */
    axios
         .get(
              `https://api.elderscrollslegends.io/v1/cards?name=${value}` /* query our url and pass in the user requested card name */
         )
         .then(response => { /* receive data from api call */
            if(!response.data.cards.length) {
              this.setState({ noData: true }); /* if no results, update our results message variable */
            }
            this.setState({ cards: [...this.state.cards, ...response.data.cards] }); /* received results, set our cards array to the returned data */
            this.setState({ loading: false }); /* data is done fetching, we are no longer loading */
         });
   }

  handleChange(event) { /* if the input value changes, keep track of its value */
    this.setState({value: event.target.value});
  }

  handleSubmit(event) { /* pass the user input name to our api call */
    this.fetchCardsByName(this.state.value);
    event.preventDefault(); /* using a form submit to pass this data over - dont actually submit the form to any action endpoint */
  }

  clearResults = () => {
    this.setState(this.baseState);
    this.setState({ noData: false });
  }

  render() { /* display on the page */
    const loadingCSS = { /* react inline stlying, can attach these styles to the markup below with style={constName} */
         height: "100px",
         margin: "30px",
         color: "#4A7023"
    };

    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };
    const showErrMessage = { display: this.state.noData ? "block" : "none" };
    const showFoundCards = { display: this.state.noData ? "none" : "flex" };

    return ( /* will appear on page where Coponent is placed, values will be implanted */
      <div className={catalog}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Search" />
          <input type="button" value="Clear" onClick={this.clearResults} />
        </form>
          <p style={showErrMessage}>No results match your search. Please try again with another name.</p>
          <ul style={showFoundCards}>
             {this.state.cards.map((card,index) => (
               <li key={index}>
                    <img src={card.imageUrl} alt={card.name} />
                    <div>
                         <span>Name: {card.name}</span>
                         <span>Text: {card.text}</span>
                         <span>Set Name: {card.set.name}</span>
                         <span>Type: {card.type}</span>
                    </div>
               </li>
             ))}
          </ul>
        
            <div ref={loadingRef => (this.loadingRef = loadingRef)} style={loadingCSS}>
            <span style={loadingTextCSS}>Loading . . .</span>
        </div>
       </div>
    );

  }

}

export default NameSearch;