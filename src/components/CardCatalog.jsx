/* import libraries, modules, or files we wish to use in this file */
import React, { Component } from "react"; /* this allows to declare Component instead of React.Component */
import axios from "axios"; /* axios is an http request client */
import { catalog } from './Catalog.module.scss'; /* this provides the styles attached to .catalog */
import arrow from './arrow.svg'; /* pull in an icon to use in a back to top button */

class CardCatalog extends Component { /* we decalre our own component named NameSearch that inherits from the built-in Component */
     constructor() {
          super(); /* constructor and super are typically used together to create an object within a class. When we inherit, we create an instance of a parent and need to make sure all of hte parent functionality is good to go beofre we add 'more' on top in our instance */
          this.state = { /* create variable to be passed around our methods */
               cards: [], /* an array to hold our api results */
               loading: false, /* set a variable to display a loading message / icon */
               prevY: 0, /* set a variable to track if an element is on screen, will be used for inifinite scroll */
               setPage: 1 /* set a variable to track pagination */
          };
     }
    

     fetchCards(setPage) { /* fires after component mounting, receives value for pagination */
          this.setState({ loading: true }); /* set a variable to display a loading message / icon */
          axios
               .get(
                    `https://api.elderscrollslegends.io/v1/cards?pageSize=20&page=${setPage}` /* query our url and pass in the pagination value */
               )
               .then(response => { /* receive data from api call */
                    this.setState({ cards: [...this.state.cards, ...response.data.cards] }); /* received results, set our cards array to the returned data */
                    this.setState({ loading: false }); /* data is done fetching, we are no longer loading */
               });
     }

     componentDidMount() { /* call our function after the component has loaded */
          this.fetchCards(this.state.setPage); /* we call our api method where we will callout the page for pagination */ 

          var options = { /* options for Intersection Observer, used as an aternative to scroll listening */
              root: null, /* Page as root */
              rootMargin: "0px", /* margin value to the root */
              threshold: 1.0 /* 100% of the target is visble */
          };

            // Create an observer
          this.observer = new IntersectionObserver( /* create our instance of the observer */
              this.handleObserver.bind(this), /* callback function when change noticed */
              options /* include the options */
          );
            /* Observe the `loadingRef` called out below in the returned markup */
          this.observer.observe(this.loadingRef);
     }

     handleObserver(entities, observer) { /* callback funtion, triggered when observed element changed */
          const y = entities[0].boundingClientRect.y; /* watched elements top edge */
          if(this.state.prevY > y) { /* if we move past that top edge, the element is onscreen */

               const curSetPage = this.state.setPage + 1; /* increase the paginated page number */
               this.fetchCards(curSetPage); /* fetch new results with our updated page number */
               this.setState({ setPage: curSetPage }); /* reset our saved page counter to the new value */
          }
          this.setState({ prevY: y }); /* save the watched elements position */
     }

     scrollToTop() { /* a function to scroll the user back to top of the window */
          window.scrollTo({
            top: 0, /* how far from top of window */
            behavior: "smooth" /* we want to scroll to feel smooth */
          });
     }


     render() { /* display on the page */
          const loadingCSS = { /* react inline stlying, can attach these styles to the markup below with style={constName} */
               height: "100px",
               margin: "30px auto",
               width: "100%",
               color: "#FF6500",
               fontWeight: "bold"
          };

          const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

          return ( /* will appear on page where Coponent is placed, values will be implanted */
               <div className={catalog}> 
                    <ul>
                         {this.state.cards.map((card,index) => ( 
                                   <li key={index}>
                                        <img src={card.imageUrl} alt={card.name} />
                                        <div>
                                             <span><em>Name:</em> {card.name}</span>
                                             <span><em>Text:</em> {card.text}</span>
                                             <span><em>Set Name:</em> {card.set.name}</span>
                                             <span><em>Type:</em> {card.type}</span>
                                        </div>
                                   </li>
                         ))}
                    </ul>
                    <div ref={loadingRef => (this.loadingRef = loadingRef)} style={loadingCSS}> 
                         <span style={loadingTextCSS}>Loading . . .</span>
                    </div>
                    <div className="BTT" onClick={() => this.scrollToTop()}>
                         <img src={arrow} alt="back to top" />
                    </div>
               </div>
          );
     }
     

     
}

export default CardCatalog;
