import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner, Icon } from "native-base";

// Stores
import coffeeStore from "../../Stores/coffeeStore";
import authStore from "../../Stores/authStore";

// Component
import CoffeeItem from "./CoffeeItem";
import CartButton from "../Buttons/CartButton";
import Logout from "../Authentication/Logout";

const CoffeeList = () => {
  if (coffeeStore.loading) return <Spinner />;
  const coffeeshopList = coffeeStore.coffeeshops.map(coffeeshop => (
    <CoffeeItem coffeeshop={coffeeshop} key={coffeeshop.id} />
  ));
  return (
    <Content>
      <List>{coffeeshopList}</List>
      <List>{authStore.user && <Logout />}</List>
    </Content>
  );
};

CoffeeList.navigationOptions = {
  title: "Coffee List",
  headerRight: <CartButton />
};

export default observer(CoffeeList);
