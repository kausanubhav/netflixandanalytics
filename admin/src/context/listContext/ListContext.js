import { createContext, useReducer } from "react";
import ListReducer from "./ListReducer";
const INITIAL_STATE = {
  lists: [],
  isFetching: false,
  error: false,
};

export const ListContext = createContext(INITIAL_STATE);

export const ListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE);

  return (
    <ListContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ListContext.Provider>
  );
};
