import styled, { keyframes } from "styled-components";

export default function ModalLocation({ changeStatusModal }) {
   return (
      <Container>
         <SearchLocation>
            <CloseModal onClick={changeStatusModal}>X</CloseModal>
            <ModalTitle>Cek makanan yang tersedia di lokasi kamu!</ModalTitle>
            <InputSearch placeholder="Masukkan Lokasi" />

            <ResultLocation>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  fill="#a8adaf"
                  width="23px"
                  height="23px"
               >
                  <g>
                     <path d="M0,0h24v24H0V0z" fill="none" />
                  </g>
                  <g>
                     <path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.32,2.67,7.25,8,11.8c5.33-4.55,8-8.48,8-11.8C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z" />
                  </g>
               </svg>

               <div>
                  <h1>Kulina</h1>
                  <p>Jalam Tulodong Atas 28, Senayan, Kebayoran Baru</p>
                  <hr />
               </div>
            </ResultLocation>

            <ResultLocation>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  fill="#a8adaf"
                  width="23px"
                  height="23px"
               >
                  <g>
                     <path d="M0,0h24v24H0V0z" fill="none" />
                  </g>
                  <g>
                     <path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.32,2.67,7.25,8,11.8c5.33-4.55,8-8.48,8-11.8C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z" />
                  </g>
               </svg>

               <div>
                  <h1>Pancoran Riverside Appertment</h1>
                  <p>RT.6/RW.1, Pengadegan, Pancoran, South Jakarta</p>
                  <hr />
               </div>
            </ResultLocation>

            <ResultLocation>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  fill="#a8adaf"
                  width="23px"
                  height="23px"
               >
                  <g>
                     <path d="M0,0h24v24H0V0z" fill="none" />
                  </g>
                  <g>
                     <path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.32,2.67,7.25,8,11.8c5.33-4.55,8-8.48,8-11.8C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z" />
                  </g>
               </svg>

               <div>
                  <h1>Block71 Jakarta</h1>
                  <p>Ariobimo Sentral, South Jakarta, RT.9/RW.4</p>
                  <hr />
               </div>
            </ResultLocation>
         </SearchLocation>
      </Container>
   );
}

const animation = keyframes`
   from {
      opacity: 0;
      transform: scale(1.2);
   }

   to {
      opacity: 1;
      transform: scale(1);
   }
`;

const Container = styled.div`
   top: 0;
   left: 0;
   z-index: 3;
   width: 100%;
   height: 100%;
   position: fixed;
   animation: ${animation} 0.2s;
   background-color: rgba(0, 0, 0, 0.3);
   font-family: Arial, Helvetica, sans-serif;
`;

const SearchLocation = styled.div`
   width: 100%;
   height: 800px;
   padding: 20px;
   margin-top: 145px;
   background-color: #ffffff;
   border-radius: 10px 10px 0px 0px;
`;

const CloseModal = styled.span`
   margin-top: 5px;
   font-size: 26px;
   font-weight: bold;
   margin-left: 300px;
   display: inline-block;
   font-family: system-ui;
`;

const ModalTitle = styled.h1`
   font-size: 20px;
   margin-top: 30px;
   line-height: 28px;
`;

const InputSearch = styled.input`
   width: 100%;
   outline: none;
   padding: 12px;
   font-size: 17px;
   margin-top: 23px;
   border-radius: 4px;
   margin-bottom: 30px;
   border: 2px solid #f1f1f2;
`;

const ResultLocation = styled.div`
   display: flex;
   margin-bottom: 24px;

   svg {
      margin-right: 12px;
   }

   h1 {
      font-size: 17px;
      margin-bottom: 3px;
      line-height: 22px;
   }

   p {
      color: #6e7679;
      font-size: 14px;
      line-height: 18px;
   }

   hr {
      margin-top: 10px;
      border: 1px solid #f1f1f2;
   }
`;
