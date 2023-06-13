import StackNavigator from "./src/Navigation/MainStackNavigation";
import store from "./src/Store";
import {Provider} from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}
