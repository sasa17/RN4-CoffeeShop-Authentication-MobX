import { decorate, observable } from "mobx";
import { instance } from "./instance";

class CoffeeStore {
  coffeeshops = [];
  loading = true;

  fetchAllCoffeeShops = async () => {
    try {
      const res = await instance.get("?format=json");
      const coffeeshops = res.data;
      this.coffeeshops = coffeeshops;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(CoffeeStore, {
  coffeeshops: observable,
  loading: observable
});

const coffeeStore = new CoffeeStore();
coffeeStore.fetchAllCoffeeShops();

export default coffeeStore;
