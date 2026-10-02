import { Link } from "react-router-dom";
import Button from "./Button";

function ProductCard ({product, addToCart})  {
  return (
    <div className="product-card">
        <img className="product-card-image" src={product.image} alt={product.name}/>
        <p product-category>
          {product.category}</p>   
      <Link to = {`/product/${product.id}`}>
      <h3>{product.name}</h3>
      </Link>
      <p className="product-price">${product.price}</p>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
    </div>
  );
}

export default ProductCard;
