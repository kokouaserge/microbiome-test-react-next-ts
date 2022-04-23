import React, { useState, createContext } from "react";
import { userData } from "./UserData";

export const UserContext: any = createContext();

export const UserContextProvider = (props: any) => {
  const [data, setData] = useState(userData);

  return (
    <UserContext.Provider value={{ contextData: [data, setData] }}>
      {props.children}
    </UserContext.Provider>
  );
};
