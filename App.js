import { createAppContainer, createStackNavigator } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    // this one is the configuration option
    initialRouteName: "Search"
  }
);

export default createAppContainer(navigator);
