import styled from "styled-components";

export default function Header({ changeStatusModal }) {
   return (
      <Container>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            fill="#424749"
            width="34px"
            height="34px"
         >
            <rect fill="none" height="24" width="24" />
            <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z" />
         </svg>

         <HeaderMenu>
            <p>ALAMAT PENGANTARAN</p>
            <h1 onClick={changeStatusModal}>
               Tokopedia Tower
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#f9423a"
                  width="30px"
                  height="30px"
               >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
               </svg>
            </h1>
         </HeaderMenu>
      </Container>
   );
}

const Container = styled.div`
   display: flex;
   margin-top: 20px;
`;

const HeaderMenu = styled.div`
   margin-left: 25px;
   font-family: Arial, Helvetica, sans-serif;

   p {
      color: #6e7679;
      font-size: 12px;
      margin-bottom: 2px;
   }

   h1 {
      display: flex;
      color: #424749;
      font-size: 20px;
      cursor: pointer;
      font-weight: bold;
      letter-spacing: 1px;
      align-items: center;
   }

   svg {
      margin-left: 3px;
   }
`;
