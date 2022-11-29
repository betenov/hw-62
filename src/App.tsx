import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import Pricing from "./containers/Pricing/Pricing";
import Contacts from "./containers/Contacts/Contacts";
import {Route, Routes} from "react-router-dom";
import Order from "./containers/Order/Order";

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
          <Route path={"/contacts"} element={(
            <Contacts/>
          )}/>
          <Route path={'/order'} element={(<Order/>)}/>
          <Route path={"*"} element={(
            <h2> Перейдите на главное меню </h2>
          )}/>
        </Routes>
      </main>


    </>
  );
}

export default App;
