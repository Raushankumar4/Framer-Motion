import "./styles.css";
import { Title } from "../components/Title/Title";
import { Product } from "../components/Product/Product";

const Products = () => {
  return (
    <div className="page products">
      <Title>Skills</Title>
      <div className="product-list">
        <Product
          src="https://picsum.photos/id/0/300/200"
          alt="Laptop"
          title="Laptop"
          description="This is a laptop for sale"
          delay={0}
        />
        <Product
          src="https://picsum.photos/id/21/300/200"
          alt="Shoes"
          title="Shoes"
          description="These are some stylish shoes"
          delay={0.2}
        />
        <Product
          src="https://picsum.photos/id/237/300/200"
          alt="Puppy"
          title="Puppy"
          description="This puppy isn't for sale. He's just cute"
          delay={0.4}
        />
      </div>
    </div>
  );
};

export default Products;
