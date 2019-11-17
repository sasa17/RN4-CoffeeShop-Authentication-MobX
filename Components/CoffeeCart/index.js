import React, { Component } from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

class CoffeeCart extends Component {
  state = {
    items: [
      {
        drink: "Latte",
        option: "Small",
        quantity: 2
      },
      {
        drink: "Espresso",
        option: "Large",
        quantity: 1
      }
    ]
  };
  render() {
    const cartItems = this.state.items.map(item => (
      <CartItem item={item} key={`${item.drink} ${item.option}`} />
    ));

    return (
      <List>
        {cartItems}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default CoffeeCart;
