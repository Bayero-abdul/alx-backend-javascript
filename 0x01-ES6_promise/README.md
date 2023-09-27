# ALX JavaScript Project - ES6 Promises

This project is a part of the ALX Backend JavaScript Curriculum, focusing on ES6 Promises. It includes a series of tasks that cover key concepts related to Promises in JavaScript. Below, you will find an overview of the project and instructions for running the tasks.

## Project Overview

The ES6 Promises project is designed to help you understand and practice the following concepts:

1. Promises: What they are, why they are used, and how to work with them.
2. Using `then`, `resolve`, and `catch` methods to handle Promises.
3. Utilizing the `every` method of the Promise object.
4. Using `await` and creating async functions.
5. Error handling with `throw` and `try/catch`.

## Learning Objectives

By the end of this project, you should be able to explain:

- The fundamentals of Promises, including their purpose and usage.
- How to work with Promises using `then`, `resolve`, and `catch`.
- The role of the `every` method for Promises.
- Using `await` and creating async functions for asynchronous operations.
- Error handling with `throw` and `try/catch`.

## Setup

To get started with this project, follow these steps:

1. Install NodeJS 12.11.x:

   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

   Verify the installation:

   ```bash
   $ nodejs -v
   v12.11.1
   $ npm -v
   6.11.3
   ```

## Getting Started

To run the tasks in this project, you'll need Node.js and npm installed on your system. Follow these steps to set up the project:

1. Clone the GitHub repository:

   ```
   git clone [repository_url]
   ```

2. Navigate to the project directory:

   ```
   cd 0x01-ES6_promise
   ```

3. Install project dependencies:

   ```
   npm install
   ```

## Running the Tasks

Each task corresponds to a specific JavaScript file (e.g., `0-promise.js`, `1-promise.js`, etc.). To run a particular task, use the following command with the task's main file:

```bash
npm run dev 0-main.js
```

Replace `0-main.js` with the appropriate task's main file for each task.

## Project Structure

The project directory contains the following files and folders:

- `0-promise.js` to `9-try.js`: Individual task files for each ES6 Promise concept.
- `package.json`: Configuration file for project dependencies and scripts.
- `babel.config.js`: Babel configuration for transpiling ES6 code.
- `.eslintrc.js`: ESLint configuration for code linting.
