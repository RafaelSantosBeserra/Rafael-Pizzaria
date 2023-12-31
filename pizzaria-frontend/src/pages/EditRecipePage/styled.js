import styled from "styled-components";

export const EditPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UsefulPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px 50px 0px;
`;

export const EditFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
`

export const EditButton = styled.button`
  background-color: red;
  color: white;
  width: 90%; 
  height: 35px;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`