import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [showIntro, setShowIntro] = useState(true);

  return (
    <UserContext.Provider
      value={{ username, setUsername, showIntro, setShowIntro }}
    >
      {children}
    </UserContext.Provider>
  );
};
