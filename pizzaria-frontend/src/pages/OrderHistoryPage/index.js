import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import OrderHistory from "../../components/OrderHistory/OrderHistory";
import { BASE_URL } from "../../constants/urls";
import useRequestOrderHistory from "../../hooks/useRequestOrderHistory";
import { OrderHistoryPageContainer, UsefulPageContainer } from "./styled";

function OrderHistoryPage() {
  const orders = useRequestOrderHistory([], `${BASE_URL}/historico-de-pedidos`);
  
  return (
    <OrderHistoryPageContainer>
      <Header />
      <UsefulPageContainer>
      <h1>HISTÓRICO DE PEDIDOS</h1>
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
      </UsefulPageContainer>
      <Footer />
    </OrderHistoryPageContainer>
  );
}

export default OrderHistoryPage;
