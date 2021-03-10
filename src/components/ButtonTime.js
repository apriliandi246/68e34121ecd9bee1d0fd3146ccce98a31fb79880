import styled from "styled-components";

const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   margin-top: 20px;

   .lunch {
      color: #ffffff;
      padding: 8px 58px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      outline: none;
      border: none;
      font-size: 20px;
      background-color: #424749;
      font-family: Arial, Helvetica, sans-serif;
   }

   .dinner {
      padding: 8px 58px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      outline: none;
      border: 1px solid #f1f1f2;
      background-color: #ffffff;
      font-size: 20px;
      color: #6e7679;
      font-family: Arial, Helvetica, sans-serif;
   }
`;

function ButtonTime() {
   return (
      <Container>
         <button className="lunch">Lunc</button>
         <button className="dinner">Dinner</button>
      </Container>
   );
}

export default ButtonTime;
