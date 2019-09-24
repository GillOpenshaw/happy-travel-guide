import React, { Component } from 'react';
import './Links.css';

class Links extends Component {
    render() {
        return (
            <div className="col">
                <div className="App-links">

                    <div className="row-4">
                        <p>Planning / Before You Book</p>
                        <p>Where to go?</p>
                        <p>Type of Accommodation / Facilities Needed</p>
                        <p>Insurance</p>
                        <p>Vaccinations</p>
                    </div>

                    <div className="row-4">
                        <p>Countdown to Holiday</p>
                        <p>Medical advice / Letter from doctor</p>
                        <p>Organising and Carrying Medications</p>
                        <p>Equipment</p>
                        <p>Special Arrangements for travelling to and from Holiday</p>

                    </div>

                    <div className="row-4">
                        <p>While on Holiday</p>
                        <p>Medicines</p>
                        <p>Managing Side Effects</p>
                        <p>Accessing Help if Required</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Links;