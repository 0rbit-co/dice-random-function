import { useState } from "react";
import {
  message,
  createDataItemSigner,
  result,
  dryrun,
} from "@permaweb/aoconnect";

const getRandomNumber = async () => {
  try {
    const msg = await message({
      process: "Km0l59SF9p-A8JtHUnKqF0WYHO-HwTesnVXv4sDiEvY",
      signer: createDataItemSigner(window.arweaveWallet),
      tags: [{ name: "Action", value: "GetNumber" }],
    });
    console.log(msg);

    // const random = await result({
    //   process: "Km0l59SF9p-A8JtHUnKqF0WYHO-HwTesnVXv4sDiEvY",
    //   message: msg
    // })
    // console.log(random)

    // const num = await dryrun({
    //   process: "Km0l59SF9p-A8JtHUnKqF0WYHO-HwTesnVXv4sDiEvY",
    //   // signer: createDataItemSigner(window.arweaveWallet),
    //   tags: [
    //     { name: "Action", value: "GetNumber" },
    //   ],
    // });
    // console.log(num);
  } catch (error) {
    console.error("Error getting random number:", error);
  }
};

export default function Generate() {
  const [isLoading, setIsLoading] = useState<any>(false);
  const [randomNumber, setRandomNumber] = useState<any>(null);

  const handleGenerateClick = async () => {
    setIsLoading(true);
    const result = await getRandomNumber();
    setRandomNumber(result);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={handleGenerateClick}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate"}
        </button>
      </div>
      {randomNumber && <div>Random Number: {randomNumber}</div>}
    </div>
  );
}
