import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { AdminPageContainer, ItemAdminCard, UsefulPageContainer } from "./styled";
import CardProductAdmin from "../../components/CardProductAdmin/CardProductAdmin";
import { GlobalContext } from "../../global/GlobalContext";

function OptionsProductPage() {
    const { states } = useContext(GlobalContext);
    const { recipes } = states;

    return(
        <AdminPageContainer>
            <Header/>
            <UsefulPageContainer>
                <h1>Admnistrando Menu</h1>

                {recipes ? (recipes.map((product) => {
                    return(
                        <CardProductAdmin
                            key={product.id}
                            product={product}
                        />
                    )
                })) : (
                    <p> CARREGANDO </p>
                )}
            </UsefulPageContainer>
            <Footer/>
        </AdminPageContainer>
    )
}

export default OptionsProductPage;