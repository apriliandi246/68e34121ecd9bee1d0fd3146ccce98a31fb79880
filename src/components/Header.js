import styled from "styled-components";
import leftArrow from "../img/left-arrow.svg";

const Container = styled.div`
   display: flex;
   margin-top: 20px;
`;

const HeaderMenu = styled.div`
   margin-left: 25px;
   font-family: Arial, Helvetica, sans-serif;
`;

const HeaderMenuOne = styled.p`
   color: #6e7679;
   font-size: 12px;
   margin-bottom: 6px;
`;

const HeaderMenuTwo = styled.h1`
   color: #424749;
   font-size: 20px;
   font-weight: bold;
   letter-spacing: 1px;
`;

const LeftIcon = styled.img`
   width: 33px;
   height: 33px;
`;

function Header() {
   return (
      <Container>
         <LeftIcon src={leftArrow} alt="arrow-left" />
         <HeaderMenu>
            <HeaderMenuOne>ALAMAT PENGANTARAN</HeaderMenuOne>
            <HeaderMenuTwo>Tokopedia Tower</HeaderMenuTwo>
         </HeaderMenu>
      </Container>
   );
}

export default Header;
