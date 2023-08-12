import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

export default function CartItem({ item }) {
  const  { removeItem } = useShoppingCart();
  const { name, emoji, quantity, price } = item;
  
  const removeItemFromCart = () => { removeItem(item.id) }

  return (
    <div className="flex items-center gap-4 mb-3">
      <p className="text-4xl">{emoji}</p>
      <div>
        {name} <span className="text-xs">({quantity})</span>
      </div>
      {/* <div className="ml-auto">{price}</div> */}
      <div className="ml-auto">{price * quantity}</div>
      <button onClick={ () => removeItemFromCart() } className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1">
        <Image alt="delete icon" src="./trash.svg" width={20} height={20} />
      </button>
    </div>
  );
}
