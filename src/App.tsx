import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import store from "@State/store";
import RootNavigator from "@Navigation";
import ModalProvider from "./providers/modal";

const App = () => {
  return (
    <Provider store={store}>
      <ModalProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ModalProvider>
    </Provider>
  );
};

export default App;
