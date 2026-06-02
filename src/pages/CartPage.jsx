import Cart from "../components/Cart";

function CartPage({
  cartItems,
  removeFromCart,
}) {
  return (
    <Cart
      cartItems={cartItems}
      removeFromCart={removeFromCart}
    />
  );
}

export default CartPage;