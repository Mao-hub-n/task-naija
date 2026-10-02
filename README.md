The  website is for Nigerian to go about their day to day activities






function handleOrder(e) {
  e.preventDefault();

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  const newOrder = {
    id: Date.now(),
    items: cart,
    total,
    status: "Pending",
  };

  localStorage.setItem(
    "orders",
    JSON.stringify([...orders, newOrder])
  );

  setOrdered(true);
}


