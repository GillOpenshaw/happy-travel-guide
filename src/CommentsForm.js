import React, { Component } from 'react';
import './CommentsForm.css';

class CommentsForm extends Component {

    // state for Comments Form values
    state = {
        userfirstName: "",
        usersurname: ""
    }

    // used to set focus on user first name input box
    constructor(props) {
        // always need super(props)
        // as first line in a constructor
        super(props);
        // create a ref to store the NameInput DOM element
        this.firstNameInput = React.createRef();
        // create a ref to store the dateInput DOM element
        //this.dateInput = React.createRef();
        // constructor to bind add new user button click
        // to user input textbox firstNameInput
        this.addCommentClicked = this.addCommentClicked.bind(this);
    }

    // display an alert message 
    // this is used to confirm that their comments have been submitted
    showAlert() {
        alert("Thankyou for submitting your comments, a member of our team will be in touch with you shortly");
    }

    // store first name
    firstNameData = (event) => {
        const userfirstName = event.target.value;
        this.setState({
            userfirstName: userfirstName
        });
    }

    // store surname
    surnameData = (event) => {
        const usersurname = event.target.value;
        this.setState({
            usersurname: usersurname
        });
    }

    addCommentClicked = e => {
        e.preventDefault();

        const newfirstName = this.state.userfirstName
        const newsurname = this.state.usersurname

        // set the comment form back to the default values
        // set the focus onto the first name textbox

        /// only add comments if firstname and surname supplied
        if (newfirstName.length > 0 && newsurname.length > 0) {
           this.props.addComment(newfirstName, newsurname);

            // reset form options to defaults
            this.setState({
                userfirstName: "",
                usersurname: "",
            });

            // display message to confirm that details have been sent
            this.showAlert();
        } 
        
        else {
            //if Invalid state is set
            // an error message will display to show that the user needs to provide key details - first name, surname
            this.setState({
                userDetailsInvalid: true
            })
        }

        // set focus back to the first name text box - 
        // Explicitly focus the name input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.firstNameInput.current.focus();
    }

    // Comments Form to submit own experiences to add to website
    render() {
        return (
            <div>
            <div>
                <p>Please complete the form below to add your own experiences to the webiste</p>
            </div>
            <form>
                <div className="CommentsForm">

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstName">First name:</label>
                            <input type="text" className="form-control" id="firstName" placeholder="First name"
                                value={this.state.commentfirstName} ref={this.firstNameInput} onChange={this.firstNameData}></input>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="surname">Surname:</label>
                            <input type="text" className="form-control" id="surname" placeholder="Surname"
                                value={this.state.commentsurname} onChange={this.surnameData} ></input>
                        </div>
                    </div>

                    <div>
                        <br></br>
                        <button type='button' className='btn2 btn-outline-light' onClick={this.addCommentClicked} > Submit</button>
                    </div>

                </div>
            </form>
            </div>
        );
    }
}

export default CommentsForm;