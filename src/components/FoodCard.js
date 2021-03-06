import styled from "styled-components";
import { useDispatch } from "react-redux";
import { showFoodCart } from "../store/ui";
import { addToCart } from "../store/foods";
import currency from "../utils/currencyFormat";

export default function Food({ food }) {
   const dispatch = useDispatch();

   function addItem() {
      dispatch(showFoodCart({ status: true }));
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
                     width="18px"
                     height="18px"
                     fill="#ff232a"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>

                  <svg
                     width="18px"
                     height="18px"
                     fill="#ff232a"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>

                  <svg
                     width="18px"
                     height="18px"
                     fill="#ff232a"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>

                  <svg
                     width="18px"
                     height="18px"
                     fill="#ff232a"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M0 0h24v24H0z" fill="none" />
                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>

                  <svg
                     width="18px"
                     height="18px"
                     fill="#ff232a"
                     viewBox="0 0 24 24"
                     enableBackground="new 0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
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

               <button className="food__add-btn" onClick={addItem}>
                  ADD <span className="food__add-icon">+</span>
               </button>
            </div>
         </FoodDesc>
      </Container>
   );
}

const Container = styled.div`
   width: 100%;
   border-radius: 10px;
   margin-bottom: 32px;
   border: 1px solid #f1f1f2;
   box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);

   img {
      width: 100%;
      height: auto;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
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
      margin-right: 12px;
      font: normal 18px Arial, Helvetica, sans-serif;
   }

   .food__rating-star {
      display: flex;
      align-items: center;
   }

   .food__name {
      color: #424749;
      line-height: 23px;
      margin-bottom: 8px;
      font: bold 18px Arial, Helvetica, sans-serif;
   }

   .food__by {
      color: #6e7679;
      font: normal 16px Arial, Helvetica, sans-serif;
   }

   .food__footer {
      display: flex;
      margin-top: 24px;
      align-items: center;
      justify-content: space-between;
   }

   .food__price {
      color: #424749;
      font: bold 18px Arial, Helvetica, sans-serif;
   }

   .food__add-btn {
      border: none;
      outline: none;
      display: flex;
      color: #ffffff;
      cursor: pointer;
      padding: 8px 32px;
      border-radius: 5px;
      align-items: center;
      background-color: #f9423a;
      font: normal 18px Arial, Helvetica, sans-serif;
   }

   .food__add-icon {
      font-size: 22px;
      margin-left: 4px;
   }
`;
