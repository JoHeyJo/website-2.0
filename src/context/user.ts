import { Dispatch, SetStateAction, createContext } from "react";

export type PortfolioContextType = {
  toggleView: any;
  word: string;
}

export const PortfolioContext = createContext<PortfolioContextType>({
  toggleView: () => { },
  word:''
})

