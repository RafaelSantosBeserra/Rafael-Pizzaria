import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "../pages/CartPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterAddress from "../pages/RegisterAddress";
import OrderHistoryPage from "../pages/OrderHistoryPage";
import ApproveOrderPage from "../pages/ApproveOrderPage";
import ItemOrderPage from "../pages/ItemOrderPage";
import AdminPage from "../pages/AdminPage";
import LoginAdminPage from "../pages/LoginAdminPage";
import OptionsProductPage from "../pages/OptionsProductPage";
import EditRecipePage from "../pages/EditRecipePage";
import AddRecipePage from "../pages/AddRecipePage";

function Router() {
    return(
            <BrowserRouter>
                    <Routes>
                        <Route path="/"  element={<HomePage />} />
                        <Route path="/login"  element={<LoginPage />} />
                        <Route path="/login-l"  element={<LoginAdminPage />} />
                        <Route path="/cadastre-se"  element={<SignupPage />} />
                        <Route path="/cadastre-se/registrar-endereco" element={ <RegisterAddress />} />
                        <Route path="/user/perfil/historico-de-pedidos" element={ <OrderHistoryPage />} />
                        <Route path="/user/perfil/itens-da-compra/:orderid" element={ <ItemOrderPage />} />
                        <Route path="/user/perfil" element={<ProfilePage />} />
                        <Route path="/user/administracao" element={<AdminPage />} />
                        <Route path="/user/administracao/editar-receita-lista" element={<OptionsProductPage />} />
                        <Route path="/user/administracao/editar-receita/:id" element={<EditRecipePage /> } />
                        <Route path="/user/adicionar-receita" element={ <AddRecipePage />} />
                        <Route path="/carrinho"  element={<CartPage />} />
                        <Route path="/finalizar-pedido" element={<ApproveOrderPage />} />
                        <Route path="*"  element={<ErrorPage />} />
                    </Routes>
            </BrowserRouter>
    );
}

export default Router;