import { useState } from "react";
import styled from "styled-components";
import Cart from "./components/Cart";
import Date from "./components/Date";
import Posts from "./components/Posts";
import Header from "./components/Header";
import ButtonTime from "./components/ButtonTime";
import ModalLocation from "./components/ModalLocation";

const Container = styled.div`
   width: 90%;
   margin: 20px auto 65px auto;
`;

export default function App() {
   const [isModalOpen, setModalStatus] = useState(false);

   function changeStatusModal() {
      setModalStatus(!isModalOpen);
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
