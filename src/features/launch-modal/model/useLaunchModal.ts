import { useReducer } from 'react';

type State = { openedId: number | null };
type Action = { type: 'open'; id: number } | { type: 'close' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'open':
      return { openedId: action.id };
    case 'close':
      return { openedId: null };
    default:
      return state;
  }
}

export function useLaunchModal() {
  return useReducer(reducer, { openedId: null });
}
