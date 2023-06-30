import {
  InputDada,
  InputsContainer,
  EditFormContainer,
  EditButton,
} from "./styled";
import useForm from "../../hooks/useForm";
import { editRecipe } from "../../services/recipe";
import { useNavigate } from "react-router-dom";

const EditForm = (props) => {
  const navigate = useNavigate();
  const {title, description, price, image} = props.product[0]
  console.log(title)
  const id = props.id
  const { form, onChange, clear } = useForm({ title: `${title}`, description: "", price: "", image: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    editRecipe(form, clear, id, navigate);
  };

  return (
    <EditFormContainer>
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
          <InputDada
            name="title"
            placeholder="Título"
            value={form.title}
            required
            onChange={onChange}
            type={"text"}
          />
          <InputDada
            name="description"
            placeholder="Descrição"
            value={form.description}
            required
            onChange={onChange}
            type={"description"}
          />
          <InputDada
            name="price"
            placeholder="Preço"
            value={form.price}
            required
            onChange={onChange}
            type={"number"}
          />
          <InputDada
            name="image"
            placeholder="Imagem"
            value={form.image}
            required
            onChange={onChange}
            type={"text"}
          />

          <EditButton type="submit" variant="contained">
            EDITAR
          </EditButton>
        </InputsContainer>
      </form>
    </EditFormContainer>
  );
};

export default EditForm;
