# BFHL API

A Node.js API for processing data arrays with various operations including number classification, alphabet processing, and special character handling.

## Features

- **Number Processing**: Separates odd and even numbers, calculates sum
- **Alphabet Processing**: Converts to uppercase and creates alternating case reverse string
- **Special Character Handling**: Identifies and categorizes special characters
- **User Information**: Includes user details like name, DOB, email, and roll number

## API Endpoint

### POST `/bfhl`

Processes an array of data and returns categorized results.

**Request Body:**
```json
{
  "data": ["1", "2", "A", "B", "!", "@"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "gunjana_sahoo_27072023",
  "email": "gunjana.sahoo2022@vitstudent.ac.in",
  "roll_number": "22BAI1319",
  "odd_numbers": ["1"],
  "even_numbers": ["2"],
  "alphabets": ["A", "B"],
  "special_characters": ["!", "@"],
  "sum": "3",
  "concat_string": "bA"
}
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## Technologies Used

- Node.js
- Express.js
- Body Parser

## Author

**gunjana_sahoo** - *22BAI1319*
