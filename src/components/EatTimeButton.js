import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { chooseFoodTime, getStatusFood } from "../store/ui";

export default function ButtonsEatingTime() {
   const dispatch = useDispatch();
   const statusFood = useSelector(getStatusFood);

   return (
      <Container active={statusFood}>
         <button
            className="lunch-btn"
            onClick={() => dispatch(chooseFoodTime({ status: "lunch" }))}
         >
            Lunch
         </button>

         <button
            className="dinner-btn"
            onClick={() => dispatch(chooseFoodTime({ status: "dinner" }))}
         >
            Dinner
         </button>
      </Container>
   );
}

const activeBtn = `
   border: none;
   color: #ffffff;
   background-color: #424749;
`;

const notActive = `
   color: #6e7679;
   background-color: #ffffff;
   border: 1px solid #f1f1f2;
`;

const Container = styled.div`
   width: 100%;
   display: flex;
   margin: 20px 0 40px 0;
   justify-content: center;

   button {
      outline: none;
      cursor: pointer;
      padding: 8px 62px;
      font: normal 16px Arial, Helvetica, sans-serif;
   }

   .lunch-btn {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      ${(props) => (props.active === "lunch" ? activeBtn : notActive)};
   }

   .dinner-btn {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      ${(props) => (props.active === "dinner" ? activeBtn : notActive)};
   }
`;
