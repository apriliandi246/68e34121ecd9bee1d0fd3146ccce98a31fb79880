import { useEffect } from "react";
import styled from "styled-components";
import Food from "./components/FoodCard";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { foods } from "./dummy-data/data";
import FoodCart from "./components/FoodCart";
import ModalLocation from "./components/ModalLocation";
import DateOrderLists from "./components/DateOrderLists";
import { getStatusCart, getStatusModal } from "./store/ui";
import EatTimeButton from "./components/EatTimeButton";

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
         <EatTimeButton />

         {foods.map((food) => (
            <Food key={food.name} food={food} />
         ))}

         {statusCart === true && <FoodCart />}
         {statusModal === true && <ModalLocation />}
      </Container>
   );
}

const Container = styled.div`
   padding-left: 16px;
   padding-right: 16px;
   margin: 7px auto ${(props) => (props.statusCart === true ? "108px" : "12px")}
      auto;
`;
