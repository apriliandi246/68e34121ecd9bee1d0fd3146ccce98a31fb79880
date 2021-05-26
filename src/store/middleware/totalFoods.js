import { addedTotalFoods } from "../foods";

const totalItems =
   ({ dispatch, getState }) =>
   (next) =>
   (action) => {
      if (action.type === "food/addProduct") {
         const currentTotalItems = getState().entities.totalFoods;
         dispatch(addedTotalFoods({ totalFoods: currentTotalItems + 1 }));
      }

      next(action);
   };

export default totalItems;
