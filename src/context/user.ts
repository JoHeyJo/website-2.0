import { Dispatch, SetStateAction, createContext, useContext } from "react";

export type PortfolioContextType = {
  toggleView: () => void;
}

export const PortfolioContext = createContext<PortfolioContextType>({
  toggleView: () => { },
})

