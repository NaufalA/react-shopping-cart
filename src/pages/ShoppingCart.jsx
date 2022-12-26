import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem, CartSummary } from "../components";
import { shoppingCartActions } from "../redux/actions";

export default function ShoppingCart(props) {
  const cartItems = useSelector((root) => root.shoppingCart.cartItems);
  const shipping = useSelector((root) => root.shoppingCart.shipping);
  const discount = useSelector((root) => root.shoppingCart.discount);

  const [itemsCost, setItemsCost] = useState(0);

  useEffect(() => {
    let price = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const cartItem = cartItems[i];
      price += cartItem.item.price * cartItem.quantity;
    }

    setItemsCost(price);
  }, [cartItems]);

  const dispatch = useDispatch();

  const handleUpdateQty = (id, inc) => {
    dispatch(shoppingCartActions.updateItem({ id, inc }));
  };

  const handleRemoveItem = (id) => {
    dispatch(shoppingCartActions.removeItem({ id }));
  };

  return (
    <div className="w-full min-h-screen flex flex-col p-10 gap-10 bg-slate-100">
      <h1 className="text-4xl text-center">Shopping Cart</h1>
      <div className="h-full p-10 flex flex-row justify-center gap-10">
        <div className="flex-grow card bg-slate-50 p-6 flex flex-col gap-8">
          <h3 className="text-2xl">Cart {`(${cartItems.length} Items)`}</h3>
          {cartItems.map((c) => (
            <CartItem
              key={`cart-item-${c.item.id}`}
              cartItem={c}
              onUpdateQty={(id, item) => handleUpdateQty(id, item)}
              onRemoveItem={(id) => handleRemoveItem(id)}
            />
          ))}
        </div>
        <div className="w-1/3 flex flex-col">
          <CartSummary
            itemsCost={itemsCost}
            shippingCost={shipping.cost}
            discount={discount}
          />
        </div>
      </div>
    </div>
  );
}
