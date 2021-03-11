import { useState } from "react";
import styled from "styled-components";
import { mediaQueries } from "./utils/utils";
import Cart from "./components/Cart";
import Date from "./components/Date";
import Posts from "./components/Posts";
import Header from "./components/Header";
import ButtonTime from "./components/ButtonTime";
import ModalLocation from "./components/ModalLocation";

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
         <Date />
         <ButtonTime />
         <Posts />
         <Cart />
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
