import React, {
    createContext,
    useContext,
    useReducer
}

from "react";


// prepares the datalayer
export const DataLayerContext = createContext();

// create a reducer

export const DataLayer = ({initialState , reducer, chidren}) => (
    <DataLayerContext.Provider value={useReducer(reducer, intialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext);