import styled from "styled-components";
import food from "../img/NUSA by Betawi Corner.jpeg";

const Card = styled.div`
   width: 100%;
   margin-bottom: 32px;
   border-radius: 0px 0px 9px 9px;
   box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);

   img {
      width: 100%;
      height: auto;
      border-radius: 9px 9px 0px 0px;
   }
`;

const CardDesc = styled.div`
   padding: 20px;
   margin-top: 5px;

   .card__rating-logo {
      width: 100px;
      height: 80px;
   }

   .card__rating {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
   }

   .card__rating-number {
      color: #6e7679;
      font-size: 18px;
      margin-right: 10px;
      font-family: Arial, Helvetica, sans-serif;
   }

   .card__rating-star {
      display: flex;
      align-items: center;
   }

   .card__food-name {
      color: #424749;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 9px;
      font-family: Arial, Helvetica, sans-serif;
   }

   .card__food-by {
      color: #6e7679;
      font-size: 16px;
      font-family: Arial, Helvetica, sans-serif;
   }

   .card__footer {
      display: flex;
      margin-top: 22px;
      align-items: center;
      justify-content: space-between;
   }

   .card__price {
      color: #424749;
      font-size: 18px;
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
   }

   .card__add-btn {
      border: none;
      outline: none;
      color: #ffffff;
      font-size: 18px;
      padding: 8px 30px;
      font-weight: bold;
      border-radius: 5px;
      background-color: #f9423a;
      font-family: Arial, Helvetica, sans-serif;
   }
`;

export default function App() {
   return (
      <Card>
         <img src={food} alt="food" />

         <CardDesc>
            <div className="card__rating">
               <span className="card__rating-number">4.5</span>
               <div className="card__rating-star">
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

            <h1 className="card__food-name">NUSA by Betawi Corner</h1>
            <p className="card__food-by">by Kulina .Lunch</p>

            <div className="card__footer">
               <p className="card__price">Rp 35,0000</p>
               <button className="card__add-btn">ADD +</button>
            </div>
         </CardDesc>
      </Card>
   );
}
