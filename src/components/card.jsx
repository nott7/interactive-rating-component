import React from 'react';
import Step1 from './card--steps/Step1';
import Step2 from './card--steps/Step2';

export default function Card() {
    return (
        <div className="card__container">
            <Step1 />
            <Step2 />
        </div>

    )

}