// index.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// User details
const fullName = "gunjana_sahoo";
const dob = "27072023"; // ddmmyyyy
const email = "gunjana.sahoo2022@vitstudent.ac.in";
const rollNumber = "22BAI1319";

// API route
app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;

    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input, data must be an array" });
    }

    let oddNumbers = [];
    let evenNumbers = [];
    let alphabets = [];
    let specialChars = [];
    let sum = 0;
    let concatAlpha = "";

    data.forEach((item) => {
      if (/^\d+$/.test(item)) { 
        let num = parseInt(item, 10);
        sum += num;
        if (num % 2 === 0) {
          evenNumbers.push(item);
        } else {
          oddNumbers.push(item);
        }
      } else if (/^[a-zA-Z]$/.test(item)) {
        alphabets.push(item.toUpperCase());
        concatAlpha += item;
      } else {
        specialChars.push(item);
      }
    });

    // Alternating caps in reverse order
    let reversedConcat = concatAlpha.split("").reverse().map((ch, i) => 
      i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
    ).join("");

    res.status(200).json({
      is_success: true,
      user_id: `${fullName}_${dob}`,
      email: email,
      roll_number: rollNumber,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialChars,
      sum: sum.toString(),
      concat_string: reversedConcat
    });

  } catch (error) {
    res.status(500).json({ is_success: false, message: "Server Error", error: error.message });
  }
});

// Export for Vercel
module.exports = app;