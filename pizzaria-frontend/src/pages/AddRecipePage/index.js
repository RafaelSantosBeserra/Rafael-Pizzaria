import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AddRecipeForm from "./AddRecipeForm";
import { AddRecipePageContainer, UsefulPageContainer } from "./styled";

function AddRecipePage() {

    return(
        <AddRecipePageContainer>
            <Header />
                <UsefulPageContainer>
                    <h3>Preencha os Dados</h3>
                    <AddRecipeForm />
                </UsefulPageContainer>
            <Footer />
        </AddRecipePageContainer>
    )
}

export default AddRecipePage;