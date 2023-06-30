import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import EditForm from "./EditForm";
import { EditPageContainer, UsefulPageContainer } from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";

function EditRecipePage() {
  const params = useParams();
  const { states } = useContext(GlobalContext);
  const { recipes } = states;
  const id = params.id;

  const recipe = recipes.filter((r) => {
    if(r.id === id){
        return r
    }
  })

  return (
    <EditPageContainer>
      <Header />
      <UsefulPageContainer>
        <h3>Digite os dados para editar</h3>
        <EditForm id={id} product={recipe} />
      </UsefulPageContainer>
      <Footer />
    </EditPageContainer>
  );
}

export default EditRecipePage;
