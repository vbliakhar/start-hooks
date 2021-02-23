import React, { useContext, useReducer } from "react";
const SHOW_ALERT = "show";
const HIDE_ALERT = "hide";
const ALERT_TEXT = "textChange";
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
    case ALERT_TEXT:
      return { ...state, display: true, test: "Change" };

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
    display: false,
    test: "test",
  });
  const show = (text) => dispatch({ type: SHOW_ALERT, text });
  const hide = () => dispatch({ type: HIDE_ALERT });
  const textChange = () => dispatch({ type: ALERT_TEXT });
  return (
    <AlertContext.Provider
      value={{
        visible: state.visible,
        show,
        hide,
        text: state.text,
        display: state.display,
        textChange,
        test: state.test,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
