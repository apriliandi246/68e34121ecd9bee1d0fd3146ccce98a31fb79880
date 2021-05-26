import React from "react";
import styled from "styled-components";
import { dates } from "../dummy-data/data";

export default function DateOrderLists() {
   return (
      <>
         <Container>
            {dates.map((date) => (
               <Date key={date.date + date.day} day={date.day}>
                  <p className="day">{date.day}</p>
                  <p className="date">{date.date}</p>
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
   align-items: center;
   flex-direction: column;
   font-family: Arial, Helvetica, sans-serif;
   ${(props) => props.day === "SEL" && activeDate}

   .day {
      font-size: 14px;
      margin-bottom: 4px;
      color: ${(props) => (props.day === "SEL" ? "#ffffff;" : "#6e7679;")};
      opacity: ${(props) =>
         props.day === "SAB" || props.day === "MIN" ? "0.3" : "1"};
   }

   .date {
      font-weight: bold;
      color: ${(props) => (props.day === "SEL" ? "#ffffff;" : "#6e7679;")};
      opacity: ${(props) =>
         props.day === "SAB" || props.day === "MIN" ? "0.3" : "1"};
   }
`;

const Line = styled.hr`
   margin-top: 8px;
   background-color: #f1f1f2;
   border: 1px solid #f1f1f2;
`;
