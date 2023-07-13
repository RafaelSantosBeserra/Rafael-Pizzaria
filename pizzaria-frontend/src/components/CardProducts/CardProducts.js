import {
  AddContainer,
  CardProductArea,
  CardProductsContainer,
  ImageADD,
  ImageProduct,
  OneComponent
} from "./styled";
import add from "../../assents/add1.png";

function CardProducts(props) {
  const { title, description, image, price } = props.product;

  return (
    <CardProductsContainer>
      <CardProductArea>
        <OneComponent>
          <ImageProduct src={image} alt={title} />
          <h1>{title}</h1>

          <p>R$:{price},00</p>
        </OneComponent>

        <AddContainer>
          <p>{description}</p>
          <ImageADD src={add} onClick={() => props.addToCart(props.product)} />
        </AddContainer>
      </CardProductArea>
    </CardProductsContainer>
  );
}

export default CardProducts;
