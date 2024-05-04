import { useShpopingCartContext } from "../context/ShopingCartContext";
import { formatCurrency } from "../utilities/formator_currency";

interface StoreitemProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

function Storeitem({ id, name, price, image }: StoreitemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeCartQuantity,
  } = useShpopingCartContext();

  const quantity = getItemQuantity(id);
  return (
    <div className="mb-4">
      <img
        className="h-52 w-full 
       object-center "
        src={image}
        alt={name}
      />
      <div className="flex align-center justify-between mt-1 mx-3">
        <span className="text-xl font-bold">{name}</span>
        <span className="font-semibold text-gray-600">
          {formatCurrency(price)}
        </span>
      </div>
      <div className="w-full flex flex-col items-center">
        {quantity === 0 ? (
          <div className="w-full px-3">
            <button
              onClick={() => increaseCartQuantity(id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold mt-3 w-full py-2 px-4 rounded"
            >
              + Add to cart
            </button>
          </div>
        ) : (
          <div className="w-full flex flex-col ">
            <div className="flex justify-center gap-1">
              <button
                onClick={() => increaseCartQuantity(id)}
                className="flex w-8 h-8 bg-blue-700 hover:bg-blue-800 items-center justify-center text-xl text-white rounded-md"
              >
                +
              </button>
              <div>
                <span className="font-bold text-xl">{quantity}</span> in cart
              </div>
              <button
                onClick={() => decreaseCartQuantity(id)}
                className="flex w-8 h-8 bg-blue-700 hover:bg-red-700 items-center justify-center text-xl text-white rounded-md"
              >
                {" "}
                -{" "}
              </button>
            </div>
            <button
              onClick={() => removeCartQuantity(id)}
              className="bg-green-700 hover:bg-red-700 text-white font-semibold mt-3 w-2/6 mx-auto py-2 px-4 rounded"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Storeitem;
