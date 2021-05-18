import React from 'react';
import styles from './Pricing.module.css';
import {priceContext} from './../../../contexts/PricingContext';

export default function Pricing () {
    const buttonRef = React.useRef();
    const context = React.useContext(priceContext);

    function setButtonActive ({target}) {
        target.classList.toggle('slide');
        console.log(target.classList);
    };

    return (
        <div className={styles.pricingContainer}>
            <h3>$ {context.currentPrice}<small>/ month</small></h3>

            <div className={styles.optionContainer}>
                <div className={styles.switch}  onClick={setButtonActive}>
                    <div ref={buttonRef}></div>
                </div>
            </div>
        </div>
    )
};