# ES6 Data Manipulation

## Project Overview

The "ES6 Data Manipulation" project is a JavaScript-based assignment that focuses on various data manipulation techniques using ES6 features. The project is designed to help you become proficient in working with arrays, typed arrays, and data structures like Set and Map. Through a series of tasks, you will apply your knowledge of map, filter, and reduce functions, work with typed arrays, and manipulate data using Set and Map data structures.

## How to Get Started

To get started with this project, make sure you have Node.js 12.11.x installed on your Ubuntu 18.04 LTS environment. You'll also need code editing tools like Visual Studio Code, vi, vim, or emacs. Follow these steps to begin:

1. Install Node.js 12.11.x:
   - In your home directory, run the following commands:
   ```
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```
   Verify your Node.js and npm versions using `nodejs -v` and `npm -v` commands.

2. Install Jest, Babel, and ESLint:
   - In your project directory, use the provided package.json file to install the necessary dependencies by running `npm install`.

3. Configuration Files:
   - Ensure you have the following configuration files in your project directory:
     - `package.json`
     - `babel.config.js`
     - `.eslintrc.js`

4. Perform a final installation by running `npm install` when you have the package.json.

## Running the Tasks

The project consists of 10 tasks, each in its own file. To run and test each task, use the provided main files (e.g., `0-main.js`, `1-main.js`, etc.). Execute the tasks as shown in the code examples, for instance:
```
npm run dev 0-main.js
npm run dev 1-main.js
npm run dev 2-main.js
```

## Project Structure

The project directory has the following structure:

- `0-get_list_students.js`: Task 0
- `1-get_list_student_ids.js`: Task 1
- `2-get_students_by_loc.js`: Task 2
- `3-get_ids_sum.js`: Task 3
- `4-update_grade_by_city.js`: Task 4
- `5-typed_arrays.js`: Task 5
- `6-set.js`: Task 6
- `7-has_array_values.js`: Task 7
- `8-clean_set.js`: Task 8
- `9-groceries_list.js`: Task 9
- `10-update_uniq_items.js`: Task 10
- `README.md`: Project's README file

This project provides hands-on experience with ES6 features for data manipulation and data structures in JavaScript.

*For more details, refer to the individual task files and project README.*