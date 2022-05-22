import React, { useContext, useEffect } from "react";
import { CounterContext } from "./context/Context";

const App: React.FC = () => {
  const { counter, addCounter, decCounter } = useContext(CounterContext);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={addCounter}>adicionar</button>
      <button onClick={decCounter}>subtrair</button>
    </div>
  );
};

export default App;
