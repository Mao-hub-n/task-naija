import {useParams, Link } from "react-router-dom"
import products from "../data/product.json"
import { useState } from "react";
import Button from "../components/Button";
import Buttons from "../components/BackButton";

function ProductDetails  ({addToCart}) {
  const {id} = useParams();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  function handleAddToCart(){
    addToCart(product, quantity)
  }

  return (
    <div className="product-details">
        <img src={product.image} alt={product.name}/>

        <div>
          <p className="product-category">{product.category}</p>
            <h1>{product.name}</h1>
            <h2>${product.price}</h2>

            <p>
                This is a simple product description for {""} {product.name}.
            </p>
           
           <div className="details-quantity">
            <Button 
            onClick={() =>
              setQuantity(Math.max(1, quantity - 1))
            }>
              -
            </Button>

            <span>{quantity}</span>
            <Button 
            onClick={() =>
              setQuantity( quantity + 1)
            }>
              +
            </Button>

           </div>
            <Button onClick={handleAddToCart}>
                Add {quantity} to cart
            </Button>

            <Link to="/">
            <Buttons className="back-button">Back</Buttons>
            </Link>
        </div>
    </div>
  );
}

export default ProductDetails
