import { useEffect } from "react";
import styled from "styled-components";
import Foods from "./components/Foods";
import Header from "./components/Header";
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
      if (statusModal === false) document.body.style.overflow = "";
      if (statusModal === true) document.body.style.overflow = "hidden";
   }, [statusModal]);

   return (
      <Container statusCart={statusCart}>
         <Header />
         <DateOrderLists />
         <ButtonsEatingTime />
         <Foods />

         {statusCart === true && <FoodsCart />}
         {statusModal === true && <ModalLocation />}
      </Container>
   );
}

const Container = styled.div`
   padding-left: 16px;
   padding-right: 16px;
   margin: 7px auto ${(props) => (props.statusCart === true ? "75px" : "10px")}
      auto;
`;
