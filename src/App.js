import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Introduction from "./Introduction";
import Important from "./Important";
import Links from "./Links";
import CommentsForm from "./CommentsForm";

class App extends Component {

  // a list of all Comment Form items that can be submitted for the website
  state = {
  user: [
  { firstName: "", surname: "" }
  ]
}

// add user's coments to update the State
  addComment = (userfirstName, usersurname) =>
  {
    const currentUser = this.state.user;

    const newUserObject = {
      firstName: userfirstName,
      surname: usersurname
    }
    currentUser.push(newUserObject);
    this.setState({
      user: currentUser
    });
  }

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
            <CommentsForm />
          </div>

        </div>

      </div>
    )
  }

}


export default App;
