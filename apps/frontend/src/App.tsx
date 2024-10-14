import { ConnectButton } from "arweave-wallet-kit";
import "./App.css";
import Generate from "./components/number";

function App() {
  return (
    <>
      <h1>Vite + React + AO</h1>
      <p className="read-the-docs">
        AO Books Process:{" "}
      </p>
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
