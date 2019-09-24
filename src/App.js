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

          <div className="col-12">
            <Header />
          </div>

          <div className="col-12">
            <Introduction />
          </div>

          <div className="col-12">
            <Important />
          </div>

          <div className="col-12">
            <Links />
          </div>

          <div className="col-12">
            <Form />
          </div>

        </div>

      </div>
    )
  }

}


export default App;
