import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Introduction from "./Introduction";
import Important from "./Important";
import Links from "./Links";
import Form from "./Form";

class App extends Component {

  // display Header, Introduction, Important Note, Links and CommentsForm

  render() {
    return (
      <div className="container">

        <div className="row">

          <div className="col">
            <Header />
          </div>

          <div className="col">
            <Introduction />
          </div>

          <div className="col">
            <Important />
          </div>

          <div className="col">
            <Links />
          </div>

          <div className="col">
            <Form />
          </div>

        </div>

      </div>
    )
  }

}


export default App;
