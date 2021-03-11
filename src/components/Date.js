import React from "react";
import { dates } from "../utils/utils";
import styled from "styled-components";

export default function Date() {
   return (
      <React.Fragment>
         <Container>
            {dates.map((date) => (
               <Dates key={Math.random()} date={date.date}>
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

   @media only screen and (min-width: 910px) {
      overflow-x: inherit;
      justify-content: center;
   }
`;

const activeDate = `
   font-weight: bold;
   border-radius: 50%;
   background-color: #424749;
   padding: 10px 15.3px 10px 15.3px;
`;

const Dates = styled.div`
   display: flex;
   align-items: center;
   padding-inline: 30px;
   flex-direction: column;
   font-family: Arial, Helvetica, sans-serif;
   ${(props) => props.date === 11 && activeDate}

   .day {
      font-size: 12px;
      margin-bottom: 5px;
      color: ${(props) => (props.date === 11 ? "#ffffff;" : "#6e7679;")};
   }

   .date {
      font-weight: bold;
      color: ${(props) => (props.date === 11 ? "#ffffff;" : "#6e7679;")};
   }
`;

const Line = styled.hr`
   margin-top: 20px;
   background-color: #f1f1f2;
   border: 1px solid #f1f1f2;
`;
