# How to get started with typescript
1. (Install [Java Development Kit](https://docs.oracle.com/en/java/javase/17/install/overview-jdk-installation.html#GUID-8677A77F-231A-40F7-98B9-1FD0B48C346A).) - If needed
2. Install [Node.js](https://nodejs.org/en/download/).
3. Install [TypeScript](https://www.typescriptlang.org/download) or for mac `brew install typescript` or/and `brew install tsc`.
4. Initialize a JavaScript or TypeScript project, see [TypeScript Project Setup](https://khalilstemmler.com/blogs/typescript/node-starter-project/).

## Install packages 
1. `npm install`
2. `npm -g install <package>`: The package gets installed global at the computer. 
3. `npm install <package>`: The package gets installed in the current directory.

## Run typescript file
1. `npx tsc main.ts`: Compile the .ts-file and a .js-file is created.
2. `tsc --build`: Compile all the .ts-files in the current directory.
3. `node main.js`: Run the .js-file (Node is the environment where javascript runs).
