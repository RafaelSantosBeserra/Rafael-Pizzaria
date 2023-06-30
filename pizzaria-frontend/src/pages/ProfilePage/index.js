import React from "react";
import AddressCard from "../../components/AddressCard/AddressCard";
import {
  LogoutButton,
  LogoutContainer,
  ProfilePageContainer,
  UsefulPageContainer,
} from "./styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import useRequestAddress from "../../hooks/useRequestAddress";
import { BASE_URL } from "../../constants/urls";
import useProtectedProfilePage from "../../hooks/useProtectedProfilePage";
import useRequestOrderHistory from "../../hooks/useRequestOrderHistory";
import OrderHistory from "../../components/OrderHistory/OrderHistory";

function ProfilePage() {
  useProtectedProfilePage();
  const address = useRequestAddress([], `${BASE_URL}/user-address`);
  const orders = useRequestOrderHistory([], `${BASE_URL}/historico-de-pedidos`);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <ProfilePageContainer>
      <Header />
      <UsefulPageContainer>
        <AddressCard
          key={address.id}
          street={address.street}
          number={address.number}
          zipcode={address.zipcode}
        />

        {orders &&
          orders.map((order) => {
            return (
              <OrderHistory
                key={order.id}
                id={order.id}
                date={order.createdAt}
                price={order.total_price}
              />
            );
          })}
        <LogoutContainer>
          <LogoutButton onClick={() => logout()}>
            <h3>LOGOUT</h3>
          </LogoutButton>
        </LogoutContainer>
      </UsefulPageContainer>
      <Footer />
    </ProfilePageContainer>
  );
}

export default ProfilePage;
