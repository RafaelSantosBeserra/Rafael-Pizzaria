import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminPage, goToLoginPage } from "../routes/coordinator";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const useUnprotectedPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    axios
      .get(`${BASE_URL}/user/logged`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.loginData.login === "LOGGED") {
          if (res.data.loginData.role === "ADMIN") {
            setData(res.data.loginData);
            goToAdminPage(navigate);
            console.log(res.data.loginData);
          } else {
            setData(res.data.loginData);  
          }
        } else {
          setData(res.data.login);
          goToLoginPage(navigate);
        }
      })
      .catch((err) => {
        console.log("erro");
        console.log(err.data.message);
      });
  }, [navigate]);
  return data;
};

export default useUnprotectedPage;
