import { decorate, observable } from "mobx";
import jwt_decode from "jwt-decode";
import { instance } from "./instance";
import { AsyncStorage } from "react-native";
import { withNavigation } from "react-navigation";

class AuthStore {
  user = null;

  //   -------------- set user --------------------------------
  setUser = async token => {
    if (token) {
      this.user = jwt_decode(token);
      instance.defaults.headers.common.Authorization = `JWT ${token}`;
      await AsyncStorage.setItem("myToken", token);
    } else {
      await AsyncStorage.removeItem("myToken");
      this.user = null;
      delete instance.defaults.headers.common.Authorization;
    }
  };

  //   --------------  sign up ----------------------------------
  signupUser = async (userData, history, navigation) => {
    try {
      const res = await instance.post(
        "http://178.128.114.232/api/register/",
        userData
      );
      const data = res.data;
      this.setUser(data.token);
      history.push("/");
      navigation.navigate("ListScreen");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  //   -------------- login ----------------------------------

  loginUser = async (userData, navigation) => {
    try {
      const res = await instance.post(
        "http://178.128.114.232/api/login/",
        userData
      );
      const data = res.data;
      this.setUser(data.token);
      navigation.navigate("ListScreen");
    } catch (err) {
      console.error(err.response.data);
    }
  };
  //   -------------- logout ----------------------------------

  logoutUser = async navigation => {
    await this.setUser();
    navigation.navigate("Login");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const decodeToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decodeToken.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.setUser();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default withNavigation(authStore);
