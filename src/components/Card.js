import styled from "styled-components";
import food from "../img/NUSA by Betawi Corner.jpeg";

const Card = styled.div`
   width: 100%;
   margin-bottom: 35px;
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
               <span className="card__rating-number">5</span>
               <span className="card__rating-star">⭐ ⭐ ⭐ ⭐ ⭐</span>
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