import React from 'react';
import styles from './Pricing.module.css';

export default function Pricing () {
    const buttonRef = React.useRef();

    function setButtonActive ({target}) {
        target.classList.toggle('slide');
        console.log(target.classList);
    };

    return (
        <div className={styles.pricingContainer}>
            <h3>R$ 50,00 <small>/ month</small></h3>

            <div className={styles.optionContainer}>
                <div className={styles.switch}  onClick={setButtonActive}>
                    <div ref={buttonRef}></div>
                </div>
            </div>
        </div>
    )
};