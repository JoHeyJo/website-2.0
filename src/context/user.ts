import { Dispatch, SetStateAction, createContext } from "react";

export type PortfolioContextType = {
  toggleView: Dispatch<SetStateAction<boolean>>;
}

export const PortfolioContext = createContext<PortfolioContextType>({
  toggleView: () => {},
})

