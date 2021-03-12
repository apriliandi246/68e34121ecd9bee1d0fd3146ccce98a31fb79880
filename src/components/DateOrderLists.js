import React from "react";
import { dates } from "../utils/utils";
import styled from "styled-components";

export default function DateOrderLists() {
   return (
      <React.Fragment>
         <Container>
            {dates.map((date) => (
               <Date key={Math.random()} day={date.day}>
                  <p className="day">{date.day}</p>
                  <p className="date">{date.date}</p>
               </Date>
            ))}
         </Container>

         <Line />
      </React.Fragment>
   );
}

const Container = styled.div`
   width: 100%;
   display: flex;
   margin-top: 30px;
   overflow-x: scroll;
   align-items: center;
   padding-bottom: 2px;
`;

const activeDate = `
   font-weight: bold;
   border-radius: 50%;
   background-color: #424749;
   padding: 9px 14px 9px 14px;
`;

const Date = styled.div`
   display: flex;
   cursor: pointer;
   align-items: center;
   padding-inline: 26px;
   flex-direction: column;
   font-family: Arial, Helvetica, sans-serif;
   ${(props) => props.day === "SEL" && activeDate}

   .day {
      font-size: 14px;
      margin-bottom: 5px;
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
   margin-top: 7px;
   background-color: #f1f1f2;
   border: 1px solid #f1f1f2;
`;
