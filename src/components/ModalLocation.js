import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleModal } from "../store/ui";
import { locations } from "../dummy-data/data";

export default function ModalLocation() {
   const dispatch = useDispatch();

   return (
      <Container className="modal-location">
         <SearchLocation>
            <svg
               width="26px"
               height="26px"
               fill="#000000"
               viewBox="0 0 24 24"
               className="close-icon"
               xmlns="http://www.w3.org/2000/svg"
               onClick={() => dispatch(toggleModal({ status: false }))}
            >
               <path d="M0 0h24v24H0z" fill="none" />
               <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>

            <h1 className="search-location__title">
               Cek makanan yang tersedia di lokasi kamu!
            </h1>

            <InputSearchContainer>
               <input type="text" placeholder="Masukkan Lokasi" />

               <svg
                  width="23px"
                  height="23px"
                  fill="#E44C52"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
               </svg>
            </InputSearchContainer>

            <LocationContainer>
               {locations.map((location) => (
                  <ResultLocation key={Math.random()}>
                     <svg
                        width="30px"
                        height="30px"
                        fill="#a8adaf"
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <g>
                           <path d="M0,0h24v24H0V0z" fill="none" />
                        </g>
                        <g>
                           <path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.32,2.67,7.25,8,11.8c5.33-4.55,8-8.48,8-11.8C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z" />
                        </g>
                     </svg>

                     <div>
                        <h1>{location.name}</h1>
                        <p>{location.detail}</p>
                     </div>
                  </ResultLocation>
               ))}
            </LocationContainer>
         </SearchLocation>
      </Container>
   );
}

const Container = styled.div`
   top: 0;
   left: 0;
   z-index: 3;
   width: 100%;
   height: 100%;
   display: flex;
   position: fixed;
   align-items: center;
   justify-content: center;
   background-color: rgba(0, 0, 0, 0.6);
`;

const SearchLocation = styled.div`
   width: 100%;
   height: 734px;
   margin-top: 85px;
   background-color: #ffffff;
   padding: 25px 20px 0px 20px;
   border-radius: 10px 10px 0px 0px;

   .close-icon {
      float: right;
      margin-top: 8px;
      cursor: pointer;
      margin-right: 8px;
   }

   .search-location__title {
      margin-top: 60px;
      line-height: 28px;
      font: normal 20px Arial, Helvetica, sans-serif;
   }
`;

const LocationContainer = styled.div`
   height: 400px;
   overflow-y: scroll;
`;

const InputSearchContainer = styled.div`
   margin-top: 24px;
   position: relative;
   margin-bottom: 35px;

   svg {
      top: 0;
      left: 0;
      margin-top: 11px;
      margin-left: 12px;
      position: absolute;
   }

   input {
      width: 100%;
      outline: none;
      padding: 12px;
      text-indent: 38px;
      border-radius: 4px;
      border: 1px solid #f1f1f2;
      font: normal 16px Arial, Helvetica, sans-serif;
   }
`;

const ResultLocation = styled.div`
   display: flex;
   margin-bottom: 24px;
   padding-bottom: 16px;
   border-bottom: 1px solid #f1f1f2;

   svg {
      padding: 4px;
      border-radius: 50%;
      margin-right: 16px;
      background-color: #f0f0f1;
   }

   h1 {
      line-height: 22px;
      margin-bottom: 4px;
      font: normal 16px Arial, Helvetica, sans-serif;
   }

   p {
      color: #6e7679;
      line-height: 18px;
      font: normal 14px Arial, Helvetica, sans-serif;
   }
`;
