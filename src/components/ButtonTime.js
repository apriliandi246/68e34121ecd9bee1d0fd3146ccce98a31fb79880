import styled from "styled-components";

const Container = styled.div`
   width: 100%;
   display: flex;
   margin-top: 20px;
   justify-content: center;

   .lunch-btn {
      border: none;
      outline: none;
      color: #ffffff;
      font-size: 20px;
      padding: 8px 58px;
      background-color: #424749;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      font-family: Arial, Helvetica, sans-serif;
   }

   .dinner-btn {
      outline: none;
      color: #6e7679;
      font-size: 20px;
      padding: 8px 58px;
      border: 1px solid #f1f1f2;
      background-color: #ffffff;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      font-family: Arial, Helvetica, sans-serif;
   }
`;

function ButtonTime() {
   return (
      <Container>
         <button className="lunch-btn">Lunc</button>
         <button className="dinner-btn">Dinner</button>
      </Container>
   );
}

export default ButtonTime;
