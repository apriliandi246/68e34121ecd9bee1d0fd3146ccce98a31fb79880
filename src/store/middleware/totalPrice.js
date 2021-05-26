import { addedTotalPrice } from "../foods";

const totalPrice =
   ({ dispatch, getState }) =>
   (next) =>
   (action) => {
      if (action.type === "food/addProduct") {
         const currentActionPrice = action.payload.price;
         const currentTotalPrice = getState().entities.totalPrice;

         dispatch(
            addedTotalPrice({
               totalPrice: currentTotalPrice + currentActionPrice,
            })
         );
      }

      next(action);
   };

export default totalPrice;
