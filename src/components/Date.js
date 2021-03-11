import React from "react";
import styled from "styled-components";

const dates = [
   {
      day: "SEN",
      date: 10,
   },
   {
      day: "SEL",
      date: 11,
   },
   {
      day: "RAB",
      date: 12,
   },
   {
      day: "KAM",
      date: 13,
   },
   {
      day: "JUM",
      date: 14,
   },
   {
      day: "SAB",
      date: 15,
   },
   {
      day: "MIN",
      date: 16,
   },
];

const Container = styled.div`
   width: 100%;
   display: flex;
   margin-top: 30px;
   overflow-x: scroll;
`;

const Dates = styled.div`
   display: flex;
   align-items: center;
   padding-inline: 30px;
   flex-direction: column;
   font-family: Arial, Helvetica, sans-serif;

   .day {
      color: #6e7679;
      font-size: 12px;
      margin-bottom: 5px;
   }

   .date {
      color: #424749;
      font-weight: bold;
   }
`;

const Line = styled.hr`
   margin-top: 20px;
   border: 1px solid #f1f1f2;
`;

export default function Date() {
   return (
      <React.Fragment>
         <Container>
            {dates.map((date) => (
               <Dates key={Math.random()}>
                  <p className="day">{date.day}</p>
                  <p className="date">{date.date}</p>
               </Dates>
            ))}
         </Container>

         <Line />
      </React.Fragment>
   );
}
