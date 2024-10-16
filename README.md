# Random Number Generator using 0rbit

This project implements a random number generator using the 0rbit platform and AO processes. It includes both backend processes and a frontend application.

## Prerequisites

- [Bun](https://bun.sh/): A fast JavaScript all-in-one toolkit
- [LuaRocks](https://luarocks.org/): A package manager for Lua modules
- [Node.js and npm](https://nodejs.org/): JavaScript runtime and package manager

### Installing Prerequisites

1. **Bun**: Follow the installation instructions on the [Bun.sh website](https://bun.sh/).
2. **LuaRocks**: Follow the installation instructions on the [LuaRocks website](https://luarocks.org/).
5. **Node.js and npm**: Download and install from the [official Node.js website](https://nodejs.org/).

## Project Structure

- Backend Processes: Located in the `./ao/random-function` directory
- Frontend Application: Located in the `./apps/frontend` directory

## Setting Up and Running the AO Process

1. Place your `wallet.json` file in the root folder of the project.

2. Set the wallet environment variable:
   ```bash
   export WALLET_JSON="$(cat ./wallet.json)"
   ```

3. Build the process:
   ```bash
   cd ao/random-function && ./scripts/build.sh
   npm run random-function:build
   ```

4. Deploy the process:
   ```bash
   npm run random-function:deploy
   ```

## Setting Up and Running the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd apps/frontend
   ```

2. Install dependencies:
   ```bash
   npm i
   ```

3. Create a `constants.ts` file in the `src/constants` folder and add the following line:
   ```typescript
   export const RANDOM = "YOUR_PROCESS_ID";
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Important Note

Make sure to fund your AO Process using 0rbit points on which the process is deployed.

## Support

For any issues or questions, please:

- Open an issue on the GitHub repository
- Ping us on [Discord](https://discord.gg/nm6VKUQBrA)

You can also read the blog [here](https://blog.0rbit.co/dice-game-with-0rbit).