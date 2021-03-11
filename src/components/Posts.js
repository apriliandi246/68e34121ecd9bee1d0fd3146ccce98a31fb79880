import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
   width: 100%;
   margin: auto;
   display: flex;
   align-items: center;
   flex-direction: column;
`;

const TitleDate = styled.h1`
   color: #424749;
   font-size: 18px;
   margin-top: 60px;
   font-weight: bold;
   margin-bottom: 20px;
   font-family: Arial, Helvetica, sans-serif;
`;

function App() {
   return (
      <React.Fragment>
         <TitleDate>Kamis. 13 Maret 2019</TitleDate>

         <Container>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </Container>
      </React.Fragment>
   );
}

export default App;
