import React, {createContext, useContext, useMemo, useReducer} from 'react';
import {gifsReducer, gifState, Action} from '../reducers/gifReducer';
import {TProviderProp} from '../types/types';
import {TGifsInitialState} from '../models/gifs';

type GifsContextType = {
  state: TGifsInitialState;
  dispatch: React.Dispatch<Action>;
};

export const GifsContext = createContext<GifsContextType>({
  state: gifState,
  dispatch: () => {},
});

export const GifsProvider = ({children}: TProviderProp) => {
  const [state, dispatch] = useReducer<
    React.Reducer<TGifsInitialState, Action>
  >(gifsReducer, gifState);
  const contextValue = useMemo(() => ({state, dispatch}), [state, dispatch]);

  return (
    <GifsContext.Provider value={contextValue}>{children}</GifsContext.Provider>
  );
};

export function useGifs() {
  return useContext(GifsContext);
}
