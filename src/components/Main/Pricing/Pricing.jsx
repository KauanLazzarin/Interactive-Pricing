import React from 'react';
import styles from './Pricing.module.css';
import {priceContext} from './../../../contexts/PricingContext';
import changeIcon from './../../../assets/arrows.svg';

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

            <div className={styles.optionsContainer}>
                <strong>Monthly Biling</strong>
                    <div className={styles.switchButton}>
                        <input type="checkbox" id="toggle-button" className={styles.toggleButton}/>
                        <label htmlFor="toggle-button" className={styles.toggle}>
                        </label>
                    </div>
                <strong>
                    Yearly Biling 
                    <small> -25% </small> 
                </strong>
            </div>

        </div>
    )
};