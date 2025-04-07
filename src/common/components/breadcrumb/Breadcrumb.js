import React from 'react';

import './Breadcrumb.css';

const Breadcrumb = props => {
    return (
        <>
           <div className="wizard-breadcrumb__container">
                <ul className="wizard-breadcrumb__list">
                    <li>Postcode</li>
                    <li>Waste Type</li>
                    <li>Select Skip</li>
                    <li>Permit Check</li>
                    <li>Choose Date</li>
                    <li>Payment</li>
                </ul>
            </div>
        </>
    )
}

export default Breadcrumb