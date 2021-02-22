import React, { useContext, useReducer } from "react";
const SHOW_ALERT = "show";
const HIDE_ALERT = "hide";
const AlertContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};
const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, visible: true, text: action.text };
    case HIDE_ALERT:
      return { ...state, visible: false };
    default:
      return state;
  }
};
export const AlertProvider = ({ children }) => {
  // const [alert, setAlert] = useState(true);
  // const toggle = () => setAlert((prev) => !prev);
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: "",
  });
  const show = (text) => dispatch({ type: SHOW_ALERT, text });
  const hide = () => dispatch({ type: HIDE_ALERT });
  return (
    <AlertContext.Provider
      value={{
        visible: state.visible,
        show,
        hide,
        text: state.text,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
