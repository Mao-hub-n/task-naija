import { useState } from "react";
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./pages/ProductDetails";
import product from "./data/product.json";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import About   from "./pages/About";
// import Landing from "./pages/Landing";
import Footer from "./pages/Footer";

function Home({ addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default")

  const filteredProducts = product.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  const sortedProducts =
  [...filteredProducts].sort((a,b) => {
    if (sort === "low") {
      return a.price - b.price;
    }
    if  (sort === "high"){
      return b.price - a.price;
    }
    return 0;
  })
  return (
    <div>
      {/* <h1>Welcome to Task Naija</h1> */}
      <div className="home-page">

  {/* Hero */}
  <section className="home-hero">
    <div className="hero-content">

      <p className="hero-label">
        WELCOME TO TASK NAIJA 🇳🇬
      </p>

      <h1>
        Shop Smart.
        <br />
        Shop Naija.
      </h1>

      <p className="hero-description">
        Discover products you'll love and enjoy a
        simple shopping experience from start to finish.
      </p>

      <Link
        to="/"
        className="hero-button"
      >
        Shop Now
      </Link>

    </div>
  </section>
  </div>

      <input
        className="search"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="categories">
        <button onClick={() => setCategory("All")}>
          All
        </button>

        <button onClick={() => setCategory("Shoes")}>
          Shoes
        </button>

        <button onClick={() => setCategory("Clothing")}>
          Clothing
        </button>

        <button onClick={() => setCategory("Electronics")}>
          Electronics
        </button>

        <button onClick={() => setCategory("Gifts")}>
          Gifts
        </button>

        <button onClick={() => setCategory("Toys")}>
          Toys
        </button>

        <button onClick={() => setCategory("Home & Kitchen")}>
          Home & Kitchen
        </button>
      </div>

      <div className="sort">
        <label>Sort by: </label>
        <select value={sort}
         onChange={(e) => setSort(e.target.value)}>
          <option value="default">Default</option>
          <option value="low">Price: Low to High</option>
          <option value="">Price: High to Low</option>
         </select>
      </div>
      <div className="products">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

function Cart({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const total = cart.reduce(
    (sum, product) =>
      sum + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty 🛒</h2>
          <p>Add some products to get started.</p>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((product) => (
              <div className="cart-item" key={product.id}>
                <div>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </div>

                <div className="quantity">
                  <button
                    onClick={() =>
                      decreaseQuantity(product.id)
                    }
                  >
                    -
                  </button>

                  <span>{product.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(product.id)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove"
                  onClick={() =>
                    removeFromCart(product.id)
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <p>Total: ${total}</p>

            <Link to="/checkout">
            <button className="checkout">
              Checkout
            </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product, quantity = 1) {
    setCart((currentCart) => {
    const existingProduct = currentCart.find(
      (item) => item.id === product.id
    );
if (existingProduct) {
      return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
      );
    }
      return [
        ...currentCart,
        {
          ...product,
          quantity: quantity,
        },
      ];
    });
  }

  function removeFromCart(productId) {
    setCart(
      cart.filter(
        (product) => product.id !== productId
      )
    );
  }

  function increaseQuantity(productId) {
    setCart(
      cart.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      )
    );
  }

  function decreaseQuantity(productId) {
    setCart(
      cart
        .map((product) =>
          product.id === productId
            ? {
                ...product,
                quantity: product.quantity - 1,
              }
            : product
        )
        .filter(
          (product) => product.quantity > 0
        )
    );
  }

  return (
    <BrowserRouter>
      <Navbar cart={cart} />

      <Routes>
        <Route
          path="/"
          element={
            <Home addToCart={addToCart} />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout cart={cart} setCart={setCart} />
          }
        />

        <Route
        path="/orders"
        element={<Orders/>}/>

        <Route
        path="/orders/:id"
        element={<OrderDetails/>}/>

      

        <Route
        path="/about" 
        element= {<About />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;



/*import { BrowserRouter,Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./pages/ProductDetails";
import products from "./data/product";
import { useState } from "react";

//Home section
function Home  ({addToCart,}) {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) =>{
  
    const matchesSearch = product.name
    .toLowerCase
    .includes(search.toLowerCase());
  
    const matchesCategory = category === "All" || product.category === category;

  return  matchesSearch && matchesCategory; 

});

  return(
  <div>
   <h1>Welcome to Task Naija</h1>

   <input type="text" className="search" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)}/>
   <div className="categories">
    <button onClick={() => setCategory("All")}>All</button>
    <button onClick={() => setCategory("Shoes")}>Shoes</button>
    <button onClick={() => setCategory("Clothing")}>Clothing</button>
    <button onClick={() => setCategory("Electronics")}>Electronics</button>
    <button onClick={() => setCategory("Gifts")}>Gifts</button>
    <button onClick={() => setCategory("Toys")}>Toys</button>
    <button onClick={() => setCategory("Vehicles")}>Vehicles</button>
    <button onClick={() => setCategory("Sport")}>Sport</button>
   </div>
   <div className="products">
    {filteredProducts.map((product) => (<ProductCard key={product.id} product={product} addToCart={addToCart}/>
  ))}
   </div>
  </div>
);
}

//The cart section
function Cart ({cart, removeFromCart, increaseQuantity, decreaseQuantity}) {
  const total = cart.reduce(
    (sum, product) =>
      sum + product.price * product.quantity, 0
  );
  return (
  <div className="cart-page">
  <h1>Your Cart</h1>
  <div className="cart-container">
    <div className="cart-items">
      {cart.length === 0 ? (
            <div className="empty-cart">
      <h2>Your cart is empty</h2>
      <p>Add some product to get started.</p>
    </div>
      ) :
  (cart.map((product) => (
    <div className="cart-item" key={product.id}>
     <div>
      <h3>{product.name}</h3>

      <p>${product.price}</p>
      </div>
      <div className="quantity">
        <button onClick={() => decreaseQuantity(product.id)}>
          -
        </button>
        <span>{product.quantity}</span>

        <button onClick={() => increaseQuantity(product.id)}>
          +
        </button>
      </div>
      <button className="remove" onClick={() =>
        removeFromCart(product.id)
      }>Remove</button>
    </div>
  )
  ))}
  </div>

  <div className="cart-summary">
    <h2>Order Summary</h2>

    <p>Total: ${total}</p>

    <button className="checkout">
      Checkout
    </button>
  </div>
  </div>
  </div>
  );
}

function App () {
  const [cart, setCart] = useState([]);

  //So that the same item is not repeated but increased by 1
  function addToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);
    
    if (existingProduct){
      setCart(
        cart.map((item)=> 
          item.id === product.id
            ? {...item, quantity: item.quantity + 1}
            : item
      )
    );
    } else{
      setCart([
        ...cart,{...product, quantity: 1,},
      ]);
    }
  }

  //To remove
  function removeFromCart(productId){
    setCart(
      cart.filter((product) => product.id !== productId)
    );
  }

  //To increase
  function increaseQuantity(productId){
    setCart(
      cart.map((product) => product.id === productId 
    ? {...product, quantity: product.quantity + 1} :product)
    );
  }

  //To decrease
  function decreaseQuantity(productId){
    setCart(
      cart.map((product) => product.id === productId 
    ? {...product, quantity: product.quantity - 1} :product)
    .filter((product)=> product.quantity > 0)
    );
  }

  return (
    <BrowserRouter>
    <Navbar cart={cart}/>

    <Routes>
      <Route path="/" element={<Home addToCart={addToCart}/>}/>
      <Route path="/cart" element={<Cart cart={cart} removeFromCart= {removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>}/>
      <Route path="/product/:id" element={<ProductDetails addToCart={addToCart}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
*/