import React from "react";
import ThanksImage from '../../images/illustration-thank-you.svg';

export default function Step2() {
    return (
        <div className="step2 step">
            <div className="image__container">
                <img src={ThanksImage} alt="" />
            </div>
            <div className="summary__container">
                <div className="summary__text">
                    <p> You selected <span className="number__rating">n</span> out of 5</p>
                </div>
            </div>
            <div className="thanks__container">
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch</p>
            </div>
        </div>
    )
}
