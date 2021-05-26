import Food from "./Food";
import styled from "styled-components";
import { foods } from "../dummy-data/data";

export default function Foods() {
   return (
      <>
         <TitleDate>Kamis. 13 Maret 2019</TitleDate>

         <Container>
            {foods.map((food) => (
               <Food key={food.name} food={food} />
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
   margin-bottom: 16px;
   font: bold 18px Arial, Helvetica, sans-serif;
`;
