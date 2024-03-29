import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";


const Products = ({products}) => {
  console.log(products)
  return (
    <Container>
      {products.items.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;