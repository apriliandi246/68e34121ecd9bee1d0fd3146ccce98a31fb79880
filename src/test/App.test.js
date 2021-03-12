import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("ModalLocation component", () => {
   test("ModalLocation component doesn't exist when first time", () => {
      const { container } = render(<App />);
      const modal = container.querySelector(".sc-fubCfw");

      expect(modal).not.toBeInTheDocument();
   });

   test("ModalLocation component appear when when we trigger and vice versa", () => {
      const { container } = render(<App />);
      const modalTrigger = container.querySelector(".sc-jSgupP h1");

      fireEvent.click(modalTrigger);
      expect(container.querySelector(".sc-fubCfw")).toBeInTheDocument();

      fireEvent.click(modalTrigger);
      expect(
         container.querySelector(".sc-fubCfw fiJGmn")
      ).not.toBeInTheDocument();
   });
});

describe("FoodsCart component", () => {
   test("FoodsCart component doesn't exist when first time", () => {
      const { container } = render(<App />);
      const cart = container.querySelector(".sc-gKsewC");
      expect(cart).not.toBeInTheDocument();
   });

   test("FoodsCart component appear when add button has clicked", () => {
      const { container } = render(<App />);
      const addBtn = container.querySelector(".food__add-btn");

      fireEvent.click(addBtn);
      expect(container.querySelector(".sc-gKsewC")).toBeInTheDocument();
   });
});

describe("Lunch button and dinner button", () => {
   function getStyle(element) {
      const cssProperties = getComputedStyle(element);

      return {
         fontColor: cssProperties._values["color"],
         bgColor: cssProperties._values["background-color"],
      };
   }

   test("Lunch button active at first time", () => {
      const { container } = render(<App />);
      const lunchButton = container.querySelector(".lunch-btn");

      expect(getStyle(lunchButton)["bgColor"]).toBe("rgb(66, 71, 73)");
      expect(getStyle(lunchButton)["fontColor"]).toBe("rgb(255, 255, 255)");
   });

   test("Button active when one the buttons has clicked", () => {
      const { container } = render(<App />);
      const lunchButton = container.querySelector(".lunch-btn");
      const dinnerButton = container.querySelector(".dinner-btn");

      fireEvent.click(dinnerButton);
      expect(getStyle(dinnerButton)["bgColor"]).toBe("rgb(66, 71, 73)");
      expect(getStyle(dinnerButton)["fontColor"]).toBe("rgb(255, 255, 255)");

      fireEvent.click(lunchButton);
      expect(getStyle(lunchButton)["bgColor"]).toBe("rgb(66, 71, 73)");
      expect(getStyle(lunchButton)["fontColor"]).toBe("rgb(255, 255, 255)");
   });

   test("Lunch button will not be active when dinner button has clicked and vice versa", () => {
      const { container } = render(<App />);
      const lunchButton = container.querySelector(".lunch-btn");
      const dinnerButton = container.querySelector(".dinner-btn");

      fireEvent.click(dinnerButton);
      expect(getStyle(lunchButton)["bgColor"]).toBe("rgb(255, 255, 255)");
      expect(getStyle(lunchButton)["fontColor"]).toBe("rgb(110, 118, 121)");

      fireEvent.click(lunchButton);
      expect(getStyle(dinnerButton)["bgColor"]).toBe("rgb(255, 255, 255)");
      expect(getStyle(dinnerButton)["fontColor"]).toBe("rgb(110, 118, 121)");
   });
});
