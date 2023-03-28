import { useViewport } from 'hooks/useViewport';
import { createContext, ReactNode } from 'react';

export const Context = createContext<boolean>(false);

export function AppProvider({children} : {children: ReactNode}) {

    const isMobile = useViewport()

    return(
    <Context.Provider value={isMobile}>
        {children}
    </Context.Provider>
    )
  }