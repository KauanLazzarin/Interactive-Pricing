import React from 'react';

export const priceContext = React.createContext({});

export default function PricingContext ({children}) {
    const [currentPrice, setCurrentPrice] = React.useState(0);

    return (
        <priceContext.Provider value={{
            setCurrentPrice,
            currentPrice
        }}>
            {children}
        </priceContext.Provider>
    )
};