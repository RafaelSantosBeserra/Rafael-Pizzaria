import { useNavigate } from "react-router-dom";
import { goToEditRecipePage } from "../../routes/coordinator";
import { removeRecipe } from "../../services/recipe";
import {
  AddContainer,
  CardProductArea,
  CardProductsContainer,
  DeleteRecipeButton,
  EditRecipeButton,
  ImageProduct,
  OneComponent
} from "./styled";

function CardProductAdmin(props) {
  const navigate = useNavigate();
  const product = props.product

  return (
    <CardProductsContainer>
      <CardProductArea>
        <OneComponent>
          <ImageProduct src={product.image} alt={product.title} />
          <h1>{product.title}</h1>  
        </OneComponent>

        <AddContainer>
          <EditRecipeButton onClick={ () => goToEditRecipePage(navigate, product.id, product) } > <h3>Editar</h3> </EditRecipeButton>
          <DeleteRecipeButton onClick={ () => removeRecipe(product.id) }><h3>Remover</h3></DeleteRecipeButton>
        </AddContainer>
      </CardProductArea>
    </CardProductsContainer>
  );
}

export default CardProductAdmin;
