import React from "react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import cafes from "./list";

// Component
import CoffeeItem from "./CoffeeItem";

const CoffeeList = () => {
  const cafeList = cafes.map(cafe => <CoffeeItem cafe={cafe} key={cafe.id} />);
  return (
    <Content>
      <List>{cafeList}</List>
    </Content>
  );
};

export default CoffeeList;
