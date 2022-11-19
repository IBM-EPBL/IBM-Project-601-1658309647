import React, { createContext, useState, useEffect } from "react";


const UserContext = createContext({});

const ContextProvider = ({ children }) => {

 const [user,setUser]=useState(false);

    return (
        <UserContext.Provider
            value={{ user,setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, ContextProvider };