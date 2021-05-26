import React from "react";
import styled from "styled-components";
import { dates } from "../dummy-data/data";

export default function DateOrderLists() {
   return (
      <>
         <Container>
            {dates.map((date) => (
               <Date key={date.date + date.day} day={date.day}>
                  <button disabled={date.day === "SAB" || date.day === "MIN"}>
                     {date.day} <br /> <span>{date.date}</span>
                  </button>
               </Date>
            ))}
         </Container>

         <Line />
      </>
   );
}

const activeDate = `
   font-weight: bold;
   border-radius: 50%;
   background-color: #424749;
   padding: 9px 14px 9px 14px;
`;

const Container = styled.div`
   width: 100%;
   display: flex;
   margin-top: 32px;
   overflow-x: scroll;
   align-items: center;
   padding-bottom: 4px;
`;

const Date = styled.div`
   display: flex;
   cursor: pointer;
   padding: 0 32px;
   font-size: 14px;
   align-items: center;
   flex-direction: column;
   ${(props) => props.day === "SEL" && activeDate}

   button {
      border: none;
      outline: none;
      margin-bottom: 4px;
      background-color: transparent;
      font-family: Arial, Helvetica, sans-serif;
      color: ${(props) => (props.day === "SEL" ? "#ffffff;" : "#6e7679;")};
   }

   button:disabled {
      opacity: 0.4;
   }

   span {
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
   }
`;

const Line = styled.hr`
   margin-top: 8px;
   background-color: #f1f1f2;
   border: 1px solid #f1f1f2;
`;
