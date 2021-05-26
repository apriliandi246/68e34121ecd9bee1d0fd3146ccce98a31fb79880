import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
   name: "statusComponents",
   initialState: {
      isCartShow: false,
      isModalShow: false,
      statusFood: "lunch",
   },
   reducers: {
      showedTheCart: (ui, action) => {
         ui.isCartShow = action.payload.status;
      },
      toggledModal: (ui, action) => {
         ui.isModalShow = action.payload.status;
      },
      choosenFood: (ui, action) => {
         ui.statusFood = action.payload.status;
      },
   },
});

const { showedTheCart, toggledModal, choosenFood } = slice.actions;

export const getStatusFood = (state) => state.ui.statusFood;
export const getStatusModal = (state) => state.ui.isModalShow;
export const getStatusCart = (state) => state.ui.isCartShow;

export const toggleModal = (status) => toggledModal(status);
export const chooseFoodTime = (status) => choosenFood(status);
export const showFoodCart = (status) => showedTheCart(status);

export default slice.reducer;
