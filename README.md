**💳 Payment Validation Service**

A robust and test-driven payment validation module built with Node.js and Jest.
Designed to demonstrate clean code practices, edge case handling, and SQA-focused testing strategies.

**🚀 Overview**

This project implements a simple yet effective payment validation system. It ensures that payment inputs meet predefined business rules and returns structured responses.

It is built with a strong focus on:
✅ Input validation

✅ Edge case coverage

✅ Clean, maintainable code

✅ Test-driven development (TDD mindset)

**✨ Key Features**

🔍 Strict input validation

⚡ Lightweight and fast execution

🧪 Comprehensive unit test coverage

📦 Modular and reusable function design

📊 Clear success/error messaging structure

**🧠 Business Logic**

checkPayment(amount)

Condition

| Condition            | Result             |
| -------------------- | ------------------ |
| Not a number / falsy | ❌ Invalid amount   |
| ≤ 0                  | ❌ Invalid payment  |
| < 100                | ❌ Payment rejected |
| ≥ 100                | ✅ Payment accepted |

**📂 Project Structure**

payment/
├── payment.js          # Core validation logic
├── payment.test.js     # Unit tests (Jest)
├── package.json
└── README.md

**🛠️ Tech Stack**

Runtime: Node.js

Testing: Jest

Language: JavaScript (ES6)

**⚙️ Getting Started**

1️⃣ Clone the Repository

git clone https://github.com/aniruddhaguha/payment.git

cd payment

2️⃣ Install Dependencies

npm install

▶️ Usage Example

const checkPayment = require('./payment');

const response = checkPayment(120);

console.log(response);

// Output:
// { success: true, message: "Payment accepted." }

**🧪 Running Tests**

npm test

**🔬 Test Coverage Focus**
This project includes test cases for:

✅ Valid payments (≥ 100)

❌ Invalid inputs (null, undefined, string)

⚠️ Boundary value (100)

❌ Negative values

❌ Zero input

**📸 Example Output**

{
  "success": false,
  "message": "Payment rejected"
}

**🎯 Why This Project Matters**
This project showcases:

Strong understanding of SQA fundamentals

Ability to design testable code

Knowledge of edge case analysis

Hands-on experience with Jest testing framework

**Perfect for demonstrating skills in:**
Software Quality Assurance (SQA)

Automation Testing Foundations

Backend Validation Logic

**👨‍💻 About Me**

Anirudha Guha

SQA Engineer | Automation Testing Enthusiast

🔧 Skilled in API & Automation Testing

🧪 Passionate about Quality Engineering

📈 ISTQB Certified Tester
