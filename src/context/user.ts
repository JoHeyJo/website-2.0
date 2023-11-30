import { Dispatch, SetStateAction, createContext, useContext } from "react";

export type PortfolioContextType = {
  toggleView: () => void;
  index: number;
  handleSelect: (index: number) => void;
  setIndex: (value: React.SetStateAction<number>) => void
}

export const PortfolioContext = createContext<PortfolioContextType>({
  toggleView: () => { },
  index: 0,
  setIndex: () => { },
  handleSelect: () => {}
})

