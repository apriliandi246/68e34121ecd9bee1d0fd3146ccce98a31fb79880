import styled from "styled-components";
import { foods } from "../utils/utils";
import Food from "./Food";

export default function Foods({ changeStatusCart }) {
   return (
      <>
         <TitleDate>Kamis. 13 Maret 2019</TitleDate>

         <Container>
            {foods.map((food) => (
               <Food
                  key={food.name}
                  food={food}
                  changeStatusCart={changeStatusCart}
               />
            ))}
         </Container>
      </>
   );
}

const Container = styled.div`
   width: 100%;
   margin: auto;
   display: flex;
   align-items: center;
   flex-direction: column;
`;

const TitleDate = styled.h1`
   color: #424749;
   font-size: 19px;
   font-weight: bold;
   margin-bottom: 18px;
   font-family: Arial, Helvetica, sans-serif;
`;
