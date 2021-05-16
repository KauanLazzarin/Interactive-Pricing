import React from 'react';
import styles from './Input.module.css';

export default function Input () {
    const [inputValue, setInputValue] = React.useState(0);
    const [priceValue, setPriceValue] = React.useState(0);

    React.useEffect(() => {
        const mensalPrice = inputValue / 22;
        setPriceValue(mensalPrice.toFixed(2));
    }, [inputValue]);

    function handleChangeValue ({target}) {
        setInputValue(target.value);
    };

    return (
        <header className={styles.inputContainer}>
            <h2>{inputValue}K PAGEVIEWS</h2>

            <input type="range" min="0" max="500" id="rangeInput" onChange={handleChangeValue} />

            {priceValue}
        </header>
    );
};