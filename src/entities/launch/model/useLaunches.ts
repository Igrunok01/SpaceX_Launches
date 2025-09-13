import { useEffect, useReducer, type Reducer } from 'react';
import { getLaunches } from '../api/getLaunches';
import type { Launch } from './types';

type State = { launches: Launch[]; error: string | null; loading: boolean };
type Action =
  | { type: 'launches'; payload: Launch[] }
  | { type: 'error'; payload: string | null }
  | { type: 'loading'; payload: boolean };

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'launches':
      return {
        ...state,
        launches: action.payload,
      };
    case 'error':
      return {
        ...state,
        error: action.payload,
      };
    case 'loading':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

const initialState: State = {
  launches: [],
  error: null,
  loading: true,
};

export function useLaunches() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    const load = async () => {
      try {
        const fetchLaunches = await getLaunches();
        if (!active) return;
        dispatch({ type: 'launches', payload: fetchLaunches });
        dispatch({ type: 'loading', payload: false });
      } catch (e: unknown) {
        if ((e as DOMException)?.name === 'AbortError') return;
        if (!active) return;
        dispatch({ type: 'error', payload: 'Не удалось загрузить запуски' });
        dispatch({ type: 'loading', payload: false });
      }
    };
    load();
    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  return {
    launches: state.launches,
    loading: state.loading,
    error: state.error,
  };
}
