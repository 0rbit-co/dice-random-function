import React from 'react';
import { ConnectButton } from "arweave-wallet-kit";
import "./App.css";
import EnhancedDiceGame from "./components/number";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <ConnectButton profileModal={true} showBalance={true} className="mb-8" />
      <EnhancedDiceGame />
      <div>
      {/* <div className="">
        <a 
          href="https://0rbit.hashnode.dev/dice-game-with-0rbit" 
          target="_blank" 
          rel="noopener noreferrer"
          className="textColor"
        >
          Check out the blog post here!
        </a>
      </div> */}
      </div>
    </div>
  );
}

export default App;