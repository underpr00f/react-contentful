import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import { SingleRoom } from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Navbar } from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

import { Helmet } from 'react-helmet';
import { YMInitializer } from 'react-yandex-metrika';

function App() {
  return (
    <>
      <Helmet>
        <title>Luxurious Rooms</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Beach Resort application by underproof" />
      </Helmet>
      <YMInitializer accounts={[53709112]} options={{
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true}} version="2" />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
