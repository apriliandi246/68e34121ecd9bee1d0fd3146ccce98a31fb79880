import { useEffect } from "react";
import styled from "styled-components";
import Foods from "./components/Foods";
import Header from "./components/Header";
import { mediaQueries } from "./utils/utils";
import FoodsCart from "./components/FoodsCart";
import ModalLocation from "./components/ModalLocation";
import DateOrderLists from "./components/DateOrderLists";
import ButtonsEatingTime from "./components/ButtonsEatingTime";
import { useSelector } from "react-redux";
import {
   getStatusCart,
   getStatusModal,
} from "./store/statusComponents/statusComponents";

export default function App() {
   const statusCart = useSelector(getStatusCart);
   const statusModal = useSelector(getStatusModal);

   useEffect(() => {
      if (statusModal === false) {
         document.body.style.overflow = "";
      } else {
         document.body.style.overflow = "hidden";
      }
   }, [statusModal]);

   return (
      <Container statusCart={statusCart}>
         <Header />
         <DateOrderLists />
         <ButtonsEatingTime />
         <Foods />
         {statusModal === true && <ModalLocation />}
         {statusCart === true && <FoodsCart />}
      </Container>
   );
}

const Container = styled.div`
   width: 90%;
   overflow-x: hidden;
   margin: 7px auto ${(props) => (props.statusCart === true ? "75px" : "10px")}
      auto;
   ${mediaQueries}
`;
