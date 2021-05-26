import App from "../App";
import configureStore from "../store/configureStore";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";

describe("ModalLocation component", () => {
   test("ModalLocation component doesn't exist when the first time", () => {
      const { container } = render(
         <Provider store={configureStore()}>
            <App />
         </Provider>
      );

      expect(
         container.querySelector(".modal-location")
      ).not.toBeInTheDocument();
   });

   test("ModalLocation component appear when we trigger and vice versa", () => {
      const { container } = render(
         <Provider store={configureStore()}>
            <App />
         </Provider>
      );

      fireEvent.click(container.querySelector(".toggle-modal"));
      expect(container.querySelector(".modal-location")).toBeInTheDocument();

      fireEvent.click(container.querySelector(".close-icon"));
      expect(
         container.querySelector(".modal-location")
      ).not.toBeInTheDocument();
   });
});

describe("FoodCart component", () => {
   test("FoodCart component doesn't exist when first time", () => {
      const { container } = render(
         <Provider store={configureStore()}>
            <App />
         </Provider>
      );

      expect(container.querySelector(".food-cart")).not.toBeInTheDocument();
   });

   test("FoodsCart component appear when add button has clicked", () => {
      const { container } = render(
         <Provider store={configureStore()}>
            <App />
         </Provider>
      );

      fireEvent.click(container.querySelector(".food__add-btn"));
      expect(container.querySelector(".food-cart")).toBeInTheDocument();
   });
});
