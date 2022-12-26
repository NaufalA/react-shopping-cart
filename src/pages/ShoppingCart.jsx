import CartItem from "../components";
import CartItemModel from "../shared/models/CartItemModel";
import ItemModel from "../shared/models/ItemModel";
import shirt from "../assets/img/shirt.jpg";
import sweatshirt from "../assets/img/sweatshirt.jpg";

export default function ShoppingCart(props) {
  const cartItems = [
    new CartItemModel(
      new ItemModel(1, "Plain Red Shirt", "Shirt", "Red", "M", shirt, 39.49, "1 Piece"),
      1
    ),
    new CartItemModel(
      new ItemModel(1, "Blue Sweatshirt", "Sweatshirt", "Blue", "L", sweatshirt, 49.99, ""),
      2
    )
  ];

  return (
    <div className="w-full min-h-screen flex flex-col p-10 gap-10 bg-slate-100">
      <h1 className="text-4xl text-center">Shopping Cart</h1>
      <div className="h-full p-10 flex flex-row justify-center gap-10">
        <div className="bg-slate-50 flex-grow card p-6 flex flex-col gap-8">
          <h3 className="text-2xl">Cart {`(${"0"} Items)`}</h3>
          <CartItem cartItem={cartItems[0]} />
          <CartItem cartItem={cartItems[1]} />
        </div>
        <div className="bg-slate-50 w-1/3 flex flex-col">
          <div className="card p-6 flex flex-col gap-8 justify-center">
            <h3 className="text-2xl">Summary</h3>
            <div className="flex flex-col gap-2">
              <p className="flex justify-between">
                <span>Items Price</span>
                <span>{`$${"0000"}`}</span>
              </p>
              <p className="flex justify-between">
                <span>Shipping</span>
                <span>{"FREE"}</span>
              </p>
              <hr />
              <p className="font-bold flex justify-between">
                <span>Total Price (Includes VAT)</span>
                <span>{`$${"0000"}`}</span>
              </p>
            </div>
            <button className="justify-self-stretch rounded-md border-0 p-4 bg-blue-600 text-slate-50 text-lg">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
