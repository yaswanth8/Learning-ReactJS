import React from 'react';
export const ShoppingContext = React.createContext({});

const ShoppingProvider = ({children})=> {
    
    return (
        <ShoppingContext.Provider value={{}}>
            {children}
        </ShoppingContext.Provider>

    )
};

export default ShoppingProvider;



