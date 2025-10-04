"use client"; // just remember this thing
// insidet the  file if you do not use the "use client " then it will give you the console.erro;
// this is the mandatory thing

import { Provider } from "react-redux";
import store from "./store";
const ReduxProvider = ({ children }) => {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default ReduxProvider;
