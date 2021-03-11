import styled from "styled-components";
import Header from "./components/Header";
import Date from "./components/Date";
import ButtonTime from "./components/ButtonTime";
import Posts from "./components/Posts";

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
      </Container>
   );
}
