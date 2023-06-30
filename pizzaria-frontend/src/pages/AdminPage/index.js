import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { AdminPageContainer, ItemAdminCard, UsefulPageContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToAddRecipes, goToOptionsProductPage, goToOrderHistoryPage } from "../../routes/coordinator";

function AdminPage() {
    const navigate = useNavigate();

    return(
        <AdminPageContainer>
            <Header/>
            <UsefulPageContainer>
                <h1>ADMINISTRAÇÃO</h1>                
                <ItemAdminCard onClick={() => goToOptionsProductPage(navigate) }>
                    <h3>Administrar Receitas</h3>   
                </ItemAdminCard>
                <ItemAdminCard>
                    <h3 onClick={ () => goToAddRecipes(navigate) } >Adicionar Receita</h3>
                </ItemAdminCard>
                <ItemAdminCard>
                    <h3 onClick={ () => goToOrderHistoryPage(navigate) } >Histórico de Pedidos</h3>
                </ItemAdminCard>
            </UsefulPageContainer>
            <Footer/>   
        </AdminPageContainer>
    )
}

export default AdminPage;   