import { useState } from "react";
import styled from "styled-components";

export default function ButtonsEatingTime() {
   const [activeButton, setActiveButton] = useState("lunch");

   return (
      <Container active={activeButton}>
         <button className="lunch-btn" onClick={() => setActiveButton("lunch")}>
            Lunch
         </button>

         <button
            className="dinner-btn"
            onClick={() => setActiveButton("dinner")}
         >
            Dinner
         </button>
      </Container>
   );
}

const activeBtn = `
   border: none;
   color: #ffffff;
   background-color: #424749;
`;

const notActive = `
   color: #6e7679;
   background-color: #ffffff;
   border: 1px solid #f1f1f2;
`;

const Container = styled.div`
   width: 100%;
   display: flex;
   margin-top: 18px;
   margin-bottom: 60px;
   justify-content: center;

   button {
      outline: none;
      cursor: pointer;
      font-size: 18px;
      padding: 7px 58px;
      font-family: Arial, Helvetica, sans-serif;
   }

   .lunch-btn {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      ${(props) => (props.active === "lunch" ? activeBtn : notActive)};
   }

   .dinner-btn {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      ${(props) => (props.active === "dinner" ? activeBtn : notActive)};
   }
`;
