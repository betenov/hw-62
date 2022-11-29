import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import Pricing from "./containers/Pricing/Pricing";
import Contacts from "./containers/Contacts/Contacts";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <Card/>
        <Pricing/>
      </main>
      <div>
        <Contacts/>
      </div>

    </>
  );
}

export default App;
