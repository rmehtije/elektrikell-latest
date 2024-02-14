import { createContext, useState } from "react";

export const ElectricPriceContext = createContext(null);

function ElectricPriceProvider({ children }) {
  const [averagePrice, setAveragePrice] = useState(0);

  const value = {
    values: {
      averagePrice,
    },
    actions: {
      setAveragePrice,
    },
  };

  return (
    <ElectricPriceContext.Provider value={value}>
      {children}
    </ElectricPriceContext.Provider>
  );
}

export default ElectricPriceProvider;
