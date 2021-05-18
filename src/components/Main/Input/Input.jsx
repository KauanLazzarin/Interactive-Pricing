import React from 'react';
import { priceContext } from '../../../contexts/PricingContext';
import styles from './Input.module.css';

export default function Input () {
    const [inputValue, setInputValue] = React.useState(0);
    const [priceValue, setPriceValue] = React.useState(0);
    const context = React.useContext(priceContext);

    React.useEffect(() => {
        const mensalPrice = inputValue * 0.28;
        setPriceValue(mensalPrice.toFixed(2));
        context.setCurrentPrice(priceValue);
    }, [inputValue]);

    function handleChangeValue ({target}) {
        setInputValue(target.value);
    };

    return (
        <header className={styles.inputContainer}>
            <h2>{inputValue}K PAGEVIEWS</h2>

            <input type="range" min="0" max="500" value={0} id="rangeInput" onChange={handleChangeValue} />

        </header>
    );
};