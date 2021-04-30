import { addedTotalItems } from "../products/products";

const totalItems = (store) => (next) => (action) => {
   if (action.type === "food/addProduct") {
      const currentTotalItems = store.getState().entities.totalItems;

      store.dispatch(
         addedTotalItems({
            totalItems: currentTotalItems + 1,
         })
      );
   }

   next(action);
};

export default totalItems;
