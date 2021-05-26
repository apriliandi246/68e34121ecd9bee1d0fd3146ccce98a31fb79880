import styled from "styled-components";
import { useSelector } from "react-redux";
import currency from "../utils/currencyFormat";
import { totalItems, totalPriceOfProducts } from "../store/foods";

export default function FoodsCart() {
   const totalFoods = useSelector(totalItems);
   const totalPrice = useSelector(totalPriceOfProducts);

   return (
      <Container className="food-cart">
         <div>
            <h1>
               {totalFoods} Items | {currency.format(totalPrice)}
            </h1>
            <span>Termasuk ongkos kirim</span>
         </div>

         <div>
            <svg
               fill="white"
               width="28px"
               height="28px"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M0 0h24v24H0z" fill="none" />
               <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>

            <svg
               fill="white"
               width="28px"
               height="28px"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M0 0h24v24H0V0z" fill="none" />
               <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
         </div>
      </Container>
   );
}

const Container = styled.div`
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 2;
   width: 93%;
   padding: 14px;
   display: flex;
   position: fixed;
   border-radius: 6px;
   align-items: center;
   margin: 0 auto 20px auto;
   background-color: #a23530;
   justify-content: space-between;

   h1 {
      color: #ffffff;
      margin-bottom: 4px;
      font: bold 16px Arial, Helvetica, sans-serif;
   }

   span {
      color: #ffffff;
      font: normal 14px Arial, Helvetica, sans-serif;
   }
`;
