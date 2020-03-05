import React from "react";
import authStore from "../../Stores/authStore";
import { observer } from "mobx-react";
import { Text, Button } from "native-base";

const Logout = () => {
  return (
    <Button danger onPress={authStore.logoutUser}>
      <Text>Logout {authStore.user.username}</Text>
    </Button>
  );
};
export default observer(Logout);
