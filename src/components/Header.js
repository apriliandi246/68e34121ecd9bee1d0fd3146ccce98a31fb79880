import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleModal } from "../store/ui";

export default function Header() {
   const dispatch = useDispatch();

   return (
      <Container>
         <svg
            width="34px"
            height="34px"
            fill="#424749"
            viewBox="0 0 24 24"
            enableBackground="new 0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
         >
            <rect fill="none" height="24" width="24" />
            <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z" />
         </svg>

         <HeaderMenu>
            <h3>ALAMAT PENGANTARAN</h3>

            <h1
               className="toggle-modal"
               onClick={() => dispatch(toggleModal({ status: true }))}
            >
               Tokopedia Tower
               <svg
                  width="30px"
                  height="30px"
                  fill="#f9423a"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
   align-items: center; ;
`;

const HeaderMenu = styled.div`
   margin-left: 24px;

   h3 {
      color: #6e7679;
      margin-bottom: 4px;
      font: normal 12px Arial, Helvetica, sans-serif;
   }

   h1 {
      display: flex;
      color: #424749;
      cursor: pointer;
      align-items: center;
      font: bold 18px Arial, Helvetica, sans-serif;
   }

   svg {
      margin-left: 4px;
   }
`;
