# Random Number Generator using 0rbit

This project implements a random number generator using the 0rbit platform and AO processes. It includes both backend processes and a frontend application.

## Prerequisites

- [LuaRocks](https://luarocks.org/): A package manager for Lua modules
- [Node.js and npm](https://nodejs.org/): JavaScript runtime and package manager

### Installing Prerequisites

1. **LuaRocks**: Follow the installation instructions on the [LuaRocks website](https://luarocks.org/).
2. **Node.js and npm**: Download and install from the [official Node.js website](https://nodejs.org/).

## Project Structure

- Backend Processes: Located in the `./ao/random_function` directory
- Frontend Application: Located in the `./apps/frontend` directory

## Setting Up and Running the AO Process

1. Set the wallet environment variable:
   ```bash
   export WALLET_JSON="$(cat ~/.aos.json)"
   ```

2. Build the process:
   ```bash
   cd ao/random_function && ./scripts/build.sh
   npm run random_function:build
   ```

3. Deploy the process:
   ```bash
   npm run random_function:deploy
   ```

4. Inject the process in frontend:
   ```bash
   npm run random_function:inject
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

3. Start the development server:
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