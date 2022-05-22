import React, { useState, createContext } from "react";

const CounterContext = createContext<IContext>({} as IContext);

const CounterProvider: React.FC<IProvider> = ({ children }) => {
  const [counter, setCounter] = useState(0);

  function addCounter() {
    console.log(counter + 1);
    setCounter((oldCounter) => oldCounter + 1);
  }
  function decCounter() {
    console.log(counter + 1);
    setCounter((oldCounter) => oldCounter - 1);
  }

  return <CounterContext.Provider value={{ counter, addCounter, decCounter }}>{children}</CounterContext.Provider>;
};
export { CounterContext, CounterProvider };
/*
  Value: tudo que será compartilhado com o children
  provider: tudo que deve gerenciar estado de uma variável deve estar dentro dele
*/
