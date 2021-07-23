import { createContext } from "react";
import React, { useState } from "react";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <Context.Provider
      value={{ toggleSidebar, setToggleSidebar, toggleNavbar, setToggleNavbar }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
