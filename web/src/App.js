import "./App.css";
import { useState } from "react";
import StripeContainer from "./components/StripeContainer";
import burger from "./assets/burger.jpeg";
function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="App">
      <h1>The burger Store</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$10.00</h3>
          <img src={burger} alt="Burger" />
          <button onClick={() => setShowItem(true)}>Purchase Burger</button>
        </>
      )}
    </div>
  );
}

export default App;
