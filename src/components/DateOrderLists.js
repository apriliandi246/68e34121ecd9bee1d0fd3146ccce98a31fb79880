import React from "react";
import { dates } from "../utils/utils";
import styled from "styled-components";

export default function DateOrderLists() {
   return (
      <React.Fragment>
         <Container>
            {dates.map((date) => (
               <Dates key={Math.random()} day={date.day}>
                  <p className="day">{date.day}</p>
                  <p className="date">{date.date}</p>
               </Dates>
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
`;

const activeDate = `
   font-weight: bold;
   border-radius: 50%;
   background-color: #424749;
   padding: 10px 15px 10px 15px;
`;

const Dates = styled.div`
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
   margin-top: 20px;
   background-color: #f1f1f2;
   border: 1px solid #f1f1f2;
`;
