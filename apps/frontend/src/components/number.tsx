import React, { useState } from 'react';
import { message, createDataItemSigner, dryrun } from "@permaweb/aoconnect";

const getRandomNumber = async (): Promise<number> => {
  try {
    const msg = await message({
      process: "Km0l59SF9p-A8JtHUnKqF0WYHO-HwTesnVXv4sDiEvY",
      signer: createDataItemSigner(window.arweaveWallet),
      tags: [{ name: "Action", value: "GetNumber" }],
    });
    console.log("Message sent:", msg);
    return new Promise((resolve) => {
      setTimeout(async () => {
        const output = await dryrun({
          process: "Km0l59SF9p-A8JtHUnKqF0WYHO-HwTesnVXv4sDiEvY",
          tags: [{ name: "Action", value: "ReadNumber" }],
        });
        const random = parseInt(output.Output["data"]);
        console.log(random);
        resolve(random);
      }, 2000);
    });
  } catch (error) {
    console.error("Error getting random number:", error);
    throw error;
  }
};

interface DiceProps {
  number: number;
  isRolling: boolean;
}

const Dice: React.FC<DiceProps> = ({ number, isRolling }) => {
  const faces: React.ReactNode[][] = [
    [<div key="center" className="dot center-dot" />],
    [<div key="top-left" className="dot top-left" />, <div key="bottom-right" className="dot bottom-right" />],
    [<div key="top-left" className="dot top-left" />, <div key="center" className="dot center-dot" />, <div key="bottom-right" className="dot bottom-right" />],
    [<div key="top-left" className="dot top-left" />, <div key="top-right" className="dot top-right" />, <div key="bottom-left" className="dot bottom-left" />, <div key="bottom-right" className="dot bottom-right" />],
    [<div key="top-left" className="dot top-left" />, <div key="top-right" className="dot top-right" />, <div key="center" className="dot center-dot" />, <div key="bottom-left" className="dot bottom-left" />, <div key="bottom-right" className="dot bottom-right" />],
    [<div key="top-left" className="dot top-left" />, <div key="top-right" className="dot top-right" />, <div key="middle-left" className="dot middle-left" />, <div key="middle-right" className="dot middle-right" />, <div key="bottom-left" className="dot bottom-left" />, <div key="bottom-right" className="dot bottom-right" />],
  ];

  return (
    <div className={`dice ${isRolling ? 'rolling' : ''}`}>
      <div className="face front">{faces[number - 1]}</div>
      <div className="face back">{faces[5]}</div>
      <div className="face right">{faces[2]}</div>
      <div className="face left">{faces[3]}</div>
      <div className="face top">{faces[4]}</div>
      <div className="face bottom">{faces[0]}</div>
    </div>
  );
};

const Generate: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const handleGenerateClick = async (): Promise<void> => {
    setIsLoading(true);
    setRandomNumber(null);
    try {
      const result = await getRandomNumber();
      setRandomNumber(result);
    } catch (error) {
      console.error("Failed to generate random number:", error);
      // You might want to set an error state here and display it to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="generate-container">
        <div className="dice-container">
          <Dice number={randomNumber ?? 1} isRolling={isLoading} />
        </div>
        <div className="button-container">
          <button
            type="button"
            onClick={handleGenerateClick}
            className={`generate-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? "Rolling..." : "Roll Dice"}
          </button>
        </div>
        {randomNumber !== null && (
          <div className="result">
            Random Number: {randomNumber}
          </div>
        )}
    </div>
  );
};

export default Generate;