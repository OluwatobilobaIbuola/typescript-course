import { useContext } from "react";
import CartContext, { REDUCER_ACTION_TYPE } from "./context/CartProvider";


function App() {
  const { dispatch } = useContext(CartContext);
  return (
    <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.ADD })}></button>
  );
}

export default App
