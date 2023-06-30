import styled from "styled-components";

export const CardProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  min-width: 300px;
  max-width: 450px;
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 1px solid red;
  background-color: white;
`;

export const OneComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageProduct = styled.img`
  border-radius: 30%;
  width: 20%;
  height: 20%;
  margin-right: 10px;
`;

export const AddContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const EditRecipeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  background-color: red;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

export const DeleteRecipeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  background-color: red;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

export const CardProductArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
