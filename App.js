import { createAppContainer, createStackNavigator } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    // this one is the configuration option
    initialRouteName: "Search",
    //options used for every different screen
    //normally we customize the headers
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

export default createAppContainer(navigator);

//anything we export from this file is taken by react native & shown on the screen
//createAppContainer creates a default react component & the component includes whatever the navigator is provided
