import { createSwitchNavigator } from "react-navigation";

import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import StackNav from "./StackNav";

const SwitchNav = createSwitchNavigator(
  {
    Login: Login,
    Signup: Signup,
    App: StackNav
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default SwitchNav;
