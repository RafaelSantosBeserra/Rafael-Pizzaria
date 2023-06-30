import React from "react";
import {
  InputDada,
  InputsContainer,
  AddButton,
  AddFormContainer,
} from "./styled";
import useForm from "../../hooks/useForm";
import { addRecipe } from "../../services/recipe";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const { form, onChange, clear } = useForm({ title: "", description: "", price: "", image: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    addRecipe(form, clear, navigate);
  };

  return (
    <AddFormContainer>
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
            type={"text"}
          />
            <InputDada
              name="image"
              placeholder="Imagem"
              value={form.image}
              required
              onChange={onChange}
              type={"text"}
            />
          <InputDada
            name="price"
            placeholder="Preço"
            value={form.price}
            required
            onChange={onChange}
            type={"number"}
          />

          <AddButton type="submit" variant="contained">
            ADICIONAR
          </AddButton>
        </InputsContainer>
      </form>
    </AddFormContainer>
  );
};

export default AddRecipeForm;
