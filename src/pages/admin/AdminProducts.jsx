import { useState } from "react";
import products from "../../data/product.json";

function AdminProducts() {
  const [items, setItems] = useState(() => {
    const saved =
      JSON.parse(localStorage.getItem("products"));

    if (saved) return saved;

    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );

    return products;
  });

  function deleteProduct(id) {
    const updated = items.filter(
      (product) => product.id !== id
    );

    setItems(updated);

    localStorage.setItem(
      "products",
      JSON.stringify(updated)
    );
  }

  return (
    <div className="admin-content">
      <h1>Products</h1>

      <div className="admin-product-list">
        {items.map((product) => (
          <div
            className="admin-product"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.name}
            />

            <div>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <small>{product.category}</small>
            </div>

            <button
              onClick={() =>
                deleteProduct(product.id)
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminProducts;