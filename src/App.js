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

   return (
      <Container>
         <Header changeStatusModal={changeStatusModal} />
         <DateOrderLists />
         <ButtonsEatingTime />
         <Foods />
         <FoodsCart />
         {isModalOpen === true && (
            <ModalLocation changeStatusModal={changeStatusModal} />
         )}
      </Container>
   );
}

const Container = styled.div`
   width: 90%;
   overflow-x: hidden;
   margin: 7px auto 55px auto;
   ${mediaQueries}
`;
