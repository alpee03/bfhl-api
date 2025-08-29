# BFHL API

## Description

This is a simple Node.js Express REST API that provides a single endpoint `/bfhl` for processing an array of data. It categorizes the input into odd numbers, even numbers, alphabets, and special characters. Additionally, it calculates the sum of numbers and generates a reversed concatenated string of alphabets with alternating case.

User details are embedded in the response for identification purposes.

## Installation

1. Ensure you have Node.js installed.
2. Clone the repository or download the source code.
3. Run `npm install` to install dependencies (express and body-parser).


## API Endpoint

- **POST /bfhl**
  - **Request Body**: `{ "data": [array of strings] }`
  - **Response**: JSON object with processed data, user info, sum, and concatenated string.

## Deployment

This app is configured for deployment on Vercel. Export the app in `index.js` allows it to be used as a serverless function.

## Author

- Full Name: gunjana_sahoo
- Email: gunjana.sahoo2022@vitstudent.ac.in
- Roll Number: 22BAI1319