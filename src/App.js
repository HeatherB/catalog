import React from 'react';
import './App.scss';

import CardCatalog from './components/CardCatalog'; /* import our Components for use in this file */
import NameSearch from './components/NameSearch'; /* import our Components for use in this file */
/* place components into flow of page with  <NameSearch /> and <CardCatalog /> */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <h1>Elder Scrolls Legends Card Catalog</h1>
        </div>
      </header>
      <main>
      <section>
        <div className="wrapper">
          <h2>Search for a Card by Name</h2>
          <p>Enter the name of a card you are looking for.</p>
          <p>You may search an exact or partial name.</p>
          <p>You may also search more than one name at a time. Use a pipe symbol to represent 'or' in your search.</p>
          <p>Use a comma to represent 'and' in your search.</p>
          <p>(fan or cat) Example: fan|cat</p>
          <p>(fan and cat) Example: fan,cat</p>
          <NameSearch />
        </div>
      </section>
        <section>
          <div className="wrapper">
            <h2>View All Cards</h2>
            <p>You may scroll the list of cards below. More cards will load as you scroll.</p>
            <CardCatalog />
          </div>
        </section>
      </main>
    </div>
  );
}


export default App;
