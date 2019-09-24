import React, { Component } from 'react';
import './Introduction.css';

class Introduction extends Component {
    // Display reason for website and how to share own experiences
    render() {
        return (
            <div className="Intro">
                <div className="row">
                    <div className="col-8">
                        <p>This website is inspired by my wonderful friend Silvana who always looks on the positive side of life. In March 2019 Silvana completed her 'Happy Walk' in aid of Cancer Reseach UK raising an amazing 1,699pounds for the charity.</p>
                        <p>After a diagnosis of cancer, or a chronic condition such as Crohn's disease or Ulcerative Colitis, it can be hard to think about going away on holiday. However, going on holiday can be a positive experience helping you to relax and spend time with fmaily and friends. The Happy Travel Guide is here to show that travel is possible, it might just need a bit more planning beforehand!</p>
                        <p>Many thanks to all the people who have shared their stories and we hope these also inspire you to create happy memories with family and friends</p>
                    </div>

                    <div className="col-4">
                        <p>If you would like to share your experiences with others and add these to the website, please complete the form below</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Introduction;