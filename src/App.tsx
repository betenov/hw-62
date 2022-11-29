import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import Pricing from "./containers/Pricing/Pricing";
import Contacts from "./containers/Contacts/Contacts";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <Routes>
          <Route path={"/"} element={(
            <Card/>
          )}/>
          <Route path={'/pricing'} element={(
            <Pricing/>
          )}/>
        </Routes>
      </main>
      <div>
        <Routes>
          <Route path={"/contacts"} element={(
            <Contacts/>
          )}/>
        </Routes>
      </div>

    </>
  );
}

export default App;
