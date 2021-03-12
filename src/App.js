import { useState } from "react";
import styled from "styled-components";
import { mediaQueries } from "./utils/utils";
import Foods from "./components/Foods";
import Header from "./components/Header";
import FoodsCart from "./components/FoodsCart";
import ModalLocation from "./components/ModalLocation";
import DateOrderLists from "./components/DateOrderLists";
import ButtonsEatingTime from "./components/ButtonsEatingTime";

export default function App() {
   const [isCartOpen, setStatusCart] = useState(false);
   const [isModalOpen, setModalStatus] = useState(false);

   function changeStatusModal() {
      if (isModalOpen === true) {
         setModalStatus(false);
         document.body.style.overflow = "";
      } else {
         setModalStatus(true);
         document.body.style.overflow = "hidden";
      }
   }

   function changeStatusCart() {
      setStatusCart(true);
   }

   return (
      <Container statusCart={isCartOpen}>
         <Header changeStatusModal={changeStatusModal} />
         <DateOrderLists />
         <ButtonsEatingTime />
         <Foods changeStatusCart={changeStatusCart} />

         {isCartOpen === true && <FoodsCart />}
         {isModalOpen === true && (
            <ModalLocation changeStatusModal={changeStatusModal} />
         )}
      </Container>
   );
}

const Container = styled.div`
   width: 90%;
   overflow-x: hidden;
   margin: 7px auto ${(props) => (props.statusCart === true ? "55px" : "10px")}
      auto;
   ${mediaQueries}
`;
