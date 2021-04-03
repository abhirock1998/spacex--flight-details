import React, { useContext, createContext, useReducer } from "react";

export const DataLayerProvider = createContext();

export default function DataLayer({ initialState, reducer, children }) {
  return (
    <DataLayerProvider.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerProvider.Provider>
  );
}

export const useDatalayerValue = () => useContext(DataLayerProvider);
