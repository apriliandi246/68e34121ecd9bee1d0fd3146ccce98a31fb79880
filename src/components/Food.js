import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/products/products";
import { showedTheCart } from "../store/statusComponents/statusComponents";
import currency from "../utils/currencyFormat";

export default function Food({ food }) {
   const dispatch = useDispatch();

   function addProduct() {
      dispatch(showedTheCart({ status: true }));
      dispatch(addToCart({ price: food.price }));
   }

   return (
      <Container>
         <img src={food.urlImg} alt={food.name} />

         <FoodDesc>
            <div className="food__rating">
               <span className="food__rating-number">4.5</span>
               <div className="food__rating-star">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="#6e7679"
                     width="18px"
                     height="18px"
                  >
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="#6e7679"
                     width="18px"
                     height="18px"
                  >
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="#6e7679"
                     width="18px"
                     height="18px"
                  >
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="#6e7679"
                     width="18px"
                     height="18px"
                  >
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     enableBackground="new 0 0 24 24"
                     viewBox="0 0 24 24"
                     fill="#6e7679"
                     width="18px"
                     height="18px"
                  >
                     <g>
                        <rect fill="none" height="24" width="24" x="0" />
                     </g>
                     <g>
                        <g>
                           <g>
                              <path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z" />
                           </g>
                        </g>
                     </g>
                  </svg>
               </div>
            </div>

            <h1 className="food__name">{food.name}</h1>
            <p className="food__by">by Kulina .Lunch</p>

            <div className="food__footer">
               <p className="food__price">{currency.format(food.price)}</p>
               <button className="food__add-btn" onClick={addProduct}>
                  ADD <span className="food__add-icon">+</span>
               </button>
            </div>
         </FoodDesc>
      </Container>
   );
}

const Container = styled.div`
   width: 100%;
   border-radius: 9px;
   margin-bottom: 32px;
   border: 1px solid #f1f1f2;
   box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);

   img {
      width: 100%;
      height: auto;
      border-radius: 9px 9px 0px 0px;
   }
`;

const FoodDesc = styled.div`
   padding: 20px;
   margin-top: 5px;

   .food__rating-logo {
      width: 100px;
      height: 80px;
   }

   .food__rating {
      display: flex;
      align-items: center;
      margin-bottom: 18px;
   }

   .food__rating-number {
      color: #6e7679;
      font-size: 18px;
      margin-right: 10px;
      font-family: Arial, Helvetica, sans-serif;
   }

   .food__rating-star {
      display: flex;
      align-items: center;
   }

   .food__name {
      color: #424749;
      font-size: 18px;
      font-weight: bold;
      line-height: 23px;
      margin-bottom: 9px;
      font-family: Arial, Helvetica, sans-serif;
   }

   .food__by {
      color: #6e7679;
      font-size: 16px;
      font-family: Arial, Helvetica, sans-serif;
   }

   .food__footer {
      display: flex;
      margin-top: 22px;
      align-items: center;
      justify-content: space-between;
   }

   .food__price {
      color: #424749;
      font-size: 18px;
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
   }

   .food__add-btn {
      border: none;
      outline: none;
      display: flex;
      color: #ffffff;
      font-size: 18px;
      cursor: pointer;
      padding: 7px 29px;
      font-weight: bold;
      border-radius: 5px;
      align-items: center;
      background-color: #f9423a;
      font-family: Arial, Helvetica, sans-serif;
   }

   .food__add-icon {
      font-size: 24px;
      font-weight: bold;
      margin-left: 5px;
   }
`;
