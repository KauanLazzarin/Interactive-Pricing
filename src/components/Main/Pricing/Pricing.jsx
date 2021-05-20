import React from 'react';
import styles from './Pricing.module.css';
import {priceContext} from './../../../contexts/PricingContext';

export default function Pricing () {
    const context = React.useContext(priceContext);
    const [price, setPrice] = React.useState(0);
    const [isDiscountActive, setDiscountActive] = React.useState(false);

    // sets the price when the context pricing has been updated
    React.useEffect(() => {
        setPrice(context.currentPrice);
    },[context.currentPrice]);

    return (
        <div className={styles.pricingContainer}>
            <h3>    
                $ {isDiscountActive ? (0.5 * price).toFixed(2) : price  }
                <small>/ {isDiscountActive ? 'Year' : 'Month'}</small>
            </h3>

            <div className={styles.optionsContainer}>
                <strong>Monthly Biling</strong>
                    <div className={styles.switchButton}>
                        <input 
                            type="checkbox" 
                            id="toggle-button" 
                            className={styles.toggleButton}
                            onClick={() => setDiscountActive(!isDiscountActive)}
                        />
                        
                        <label 
                            htmlFor="toggle-button" 
                            className={styles.toggle}>
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