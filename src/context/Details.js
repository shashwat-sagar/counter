import { createContext, useContext } from "react";

export const DetailsContext = createContext({
    details: ".....",
    setDetails: () => {}
});

export const DetailsContextProvider = DetailsContext.Provider;
export default function useDetails() {
    return useContext(DetailsContext);
}