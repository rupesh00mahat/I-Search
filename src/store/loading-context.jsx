import { createContext } from "react";

export const LoadingContext = createContext(
    {
    loading: true,    
    loadingChange: () => {},
    alterImage: ()=>{},
    changeProgress: () => {} ,
    }
    );