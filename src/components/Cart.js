import { mediaQueries } from "../utils/utils";
import styled from "styled-components";

export default function Cart() {
   return (
      <Container>
         <FoodItems>
            <h1>5 Items | Rp 125, 000</h1>
            <p>Termasuk ongkos kirim</p>
         </FoodItems>

         <div className="card-icon">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="white"
               width="28px"
               height="28px"
            >
               <path d="M0 0h24v24H0z" fill="none" />
               <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>

            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="white"
               width="28px"
               height="28px"
            >
               <path d="M0 0h24v24H0V0z" fill="none" />
               <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
         </div>
      </Container>
   );
}

const Container = styled.div`
   left: 50%;
   top: 94.2%;
   width: 93%;
   padding: 13px;
   display: flex;
   opacity: 0.94;
   position: fixed;
   border-radius: 5px;
   background-color: #a23530;
   justify-content: space-between;
   transform: translate(-50%, -50%);
   ${mediaQueries}
`;

const FoodItems = styled.div`
   color: #ffffff;
   font-family: Arial, Helvetica, sans-serif;

   h1 {
      font-weight: bold;
      margin-bottom: 4px;
   }

   p {
      font-size: 14px;
   }
`;
