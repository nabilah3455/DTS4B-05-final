import React, { createContext, useState } from "react";

export const MyDashboardContext = createContext();

export const DashboardProvider = (props) => {
  const [loading, setLoading] = useState(true);

  return (
    <MyDashboardContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {props.children}
    </MyDashboardContext.Provider>
  );
};
