import styled from "styled-components";
import Cart from "./components/Cart";
import Date from "./components/Date";
import Posts from "./components/Posts";
import Header from "./components/Header";
import ButtonTime from "./components/ButtonTime";

const Container = styled.div`
   width: 90%;
   margin: 20px auto;
`;

export default function App() {
   return (
      <Container>
         <Header />
         <Date />
         <ButtonTime />
         <Posts />
         <Cart />
      </Container>
   );
}
