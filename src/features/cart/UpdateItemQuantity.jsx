/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

// eslint-disable-next-line no-unused-vars
function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium"> {quantity} </span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
