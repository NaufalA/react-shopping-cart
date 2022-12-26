export default function CartSummary(props) {
  const { itemsCost, shippingCost, discount } = props;
  const countTotalPrice = () => {
    const total = itemsCost - (itemsCost * (discount ? discount.amount : 0)) / 100;

    return total + (total * 10) / 100;
  };

  return (
    <div className="card bg-slate-50 p-6 flex flex-col gap-8 justify-center">
      <h3 className="text-2xl">Summary</h3>
      <div className="flex flex-col gap-2">
        <p className="flex justify-between">
          <span>Items Price</span>
          <span>{`$${itemsCost}`}</span>
        </p>
        <p className="flex justify-between">
          <span>Shipping</span>
          <span>{shippingCost > 0 ? `$${shippingCost}` : "FREE"}</span>
        </p>
        <hr />
        <p className="font-bold flex justify-between">
          <span>Total Price (Includes VAT)</span>
          <span>{`$${countTotalPrice()}`}</span>
        </p>
      </div>
      <button className="justify-self-stretch rounded-md border-0 p-4 bg-blue-600 text-slate-50 text-lg">
        CHECKOUT
      </button>
    </div>
  );
}
