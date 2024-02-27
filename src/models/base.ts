import {TTrendingGifs} from './gifs';

export type Action = {type: string; payload: TTrendingGifs[]};

export type Dispatch = (action: Action) => void;

export type TGifsStates = {
  data: TTrendingGifs[];
  error: boolean;
  errorMessage?: null;
  loading: boolean;
};
