import styled from "styled-components";

export const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoutContainer = styled.div`
  position: fixed !important;
  right: 30px;
  bottom: 100px;
  z-index: 3;
`;

export const UsefulPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px 50px 0px;
`;

export const LogoutButton = styled.div`
  display: flex;
  justify-content: center;
  right: 150px;
  width: 100px;
  background-color: red;
  color: white;
  border-radius: 30px;
  cursor: pointer;
`;
