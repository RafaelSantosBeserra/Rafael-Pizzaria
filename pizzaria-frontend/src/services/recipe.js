import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToAdminPage, goToOptionsProductPage } from "../routes/coordinator";

export const createRecipe = (body, clear) => {
  axios
    .post(`${BASE_URL}/pizzaria/`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert(res.data.message);
      clear();
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const editRecipe = (body, clear, id, navigate) => {
  axios
    .put(`${BASE_URL}/editar-receita/${id}`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert(res.data.message);
      clear();
      goToOptionsProductPage(navigate);
      window.location.reload();
    })
    .catch((err) => {
      console.log("Receita não editada");
    });
};

export const removeRecipe = (id) => {
  axios
    .delete(`${BASE_URL}/deletar-receita/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log("ok");
      window.location.reload();
      alert(res.data.message);
    })
    .catch((err) => {
      console.log("Receita não removida");
    });
};

export const addRecipe = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/add-recipe`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log("Receita adicionada");
      clear();
      alert(res.data.message);
      goToAdminPage(navigate);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err.data.message);
    });
};
