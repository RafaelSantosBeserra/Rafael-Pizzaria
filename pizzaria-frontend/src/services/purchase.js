import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToOrderHistoryPage } from "../routes/coordinator";

export const checkout = (body, navigate, toatalPrice) => {
  axios
    .post(`${BASE_URL}/checkout-order/${toatalPrice}`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert("Pedido realizado com sucesso");
      goToOrderHistoryPage(navigate);
    })
    .catch((err) => {
      alert(err.data.message);
    });
};

export const purchaseHistory = () => {
  axios.get(``, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};
