export default function CartItem(props) {
  const { cartItem, onUpdateQty, onRemoveItem } = props;

  const updateQty = (inc) => {
    onUpdateQty(cartItem.item.id, inc);
  } 

  const removeItem = () => {
    onRemoveItem(cartItem.item.id);
  }

  return (
    <div className="flex gap-6">
      <img
        src={cartItem.item.imgUrl}
        alt={`item-img-${cartItem.item.id}`}
        className="w-1/5 rounded-lg shadow-md"
      />
      <div className="flex-grow flex flex-col gap-8 items-stretch">
        <div className="flex-grow flex flex-row justify-between">
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-bold">{cartItem.item.name}</h2>
            <p>
              {`${cartItem.item.category} - ${cartItem.item.color}`.toUpperCase()}
            </p>
            {cartItem.item.color && (
              <p>{`Color: ${cartItem.item.color}`.toUpperCase()}</p>
            )}
            {cartItem.item.color && (
              <p>{`Size: ${cartItem.item.size}`.toUpperCase()}</p>
            )}
          </div>
          <div>
            <div className="rounded-md" role="group">
              <button
                type="button"
                className="py-2 px-4 text-2xl font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                onClick={() => updateQty(-1)}
              >
                -
              </button>
              <button
                type="button"
                className="py-2 px-4 text-2xl font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                {cartItem.quantity}
              </button>
              <button
                type="button"
                className="py-2 px-4 text-2xl font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                onClick={() => updateQty(+1)}
              >
                +
              </button>
              {
                cartItem.item.note && (
                    <p className="text-center text-sm">{`(Note, ${cartItem.item.note})`}</p>
                )
              }
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex gap-4">
            <button 
                className="hover:text-blue-500"
                onClick={removeItem}
                >
              <i className="fa-solid fa-trash"></i>{" "}
              <span>{"Remove Item".toUpperCase()}</span>
            </button>
            <button className="hover:text-red-500">
              <i className="fa-solid fa-heart"></i>{" "}
              <span>{"Add To Wishlist".toUpperCase()}</span>
            </button>
          </div>
          <h3 className="text-xl">{`$${cartItem.item.price}`}</h3>
        </div>
      </div>
    </div>
  );
}
