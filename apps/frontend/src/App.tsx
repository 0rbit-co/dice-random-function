import { ConnectButton } from "arweave-wallet-kit";
import "./App.css";
import Generate from "./components/number";

function App() {
  return (
    <>
      <h1>🎲 Dice Game</h1>
      <div className="card">
        <div>
          <ConnectButton profileModal={true} showBalance={true} />
        </div>
        <Generate />
      </div>
    </>
  );
}

export default App;
