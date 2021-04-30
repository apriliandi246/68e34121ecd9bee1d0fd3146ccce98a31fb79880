import { addedTotalPrice } from "../products/products";

const totalPrice = (store) => (next) => (action) => {
   if (action.type === "food/addProduct") {
      const currentActionPrice = action.payload.price;
      const currentTotalPrice = store.getState().entities.totalPriceOfProducts;

      store.dispatch(
         addedTotalPrice({
            totalPrice: currentTotalPrice + currentActionPrice,
         })
      );
   }

   next(action);
};

export default totalPrice;
