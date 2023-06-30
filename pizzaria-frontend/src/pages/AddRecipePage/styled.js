import styled from "styled-components";

export const AddRecipePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UsefulPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0px 50px 0px;
`;

export const AddFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  max-width: 450px;
  margin-bottom: 20px;
  border: 1px solid red;
  border-radius: 30px;
`

export const InputDada = styled.input`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
  width: 90%; 
  height: 30px;
  border:none;
  border-bottom: 1px solid red;
  outline:none;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin: 20px 0px 20px 0px;
`

export const AddButton = styled.button`
  background-color: red;
  color: white;
  width: 90%; 
  height: 35px;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`