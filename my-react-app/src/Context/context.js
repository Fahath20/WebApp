import React, { createContext, useContext } from "react";

const Context = createContext();

const Child = () => {
  const context = useContext(Context);
  return <div>{context.data}</div>;
};

const Parent = () => {
  return (
    <Context.Provider value={{ data: "Data from context!" }}>
      <Child />
    </Context.Provider>
  );
};

export default Parent;