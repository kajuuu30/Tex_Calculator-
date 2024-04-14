# Tax_Calculator-

## Introduction

The tax calculator is a web-based application that allows users to easily calculate their tax liability based on their gross annual income, extra income, and age group. It provides a user-friendly interface and handles input validation to ensure accurate tax calculations. The project was built using React, Bootstrap, and other modern web development technologies.

## References & Requirements

- The tax calculation works based on this formula -
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
        - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
        - if Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax
    - Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60
        - Example
            - Age = 34, Income = 40 Lakhs, no deductions, tax = .3 * (40 - 8) = .3 * 32 = 9.6 Lakhs
- Do not restrict user from entering incorrect values like characters in the number fields
    - Highlight a error icon to the right of the input field (shown as an example in above image as a circle with `!`). Hovering over it should show the error in a tooltip
    - If no errors are present, dont show the error icon
    - This should be present in all the number fields
- The age dropdown field should have 3 values -
    - <40
    - ≥ 40 & < 60
    - ≥ 60
    - If user has not entered this value and clicks on submit, show a error icon hovering over which should show that input field is mandatory
- Error icons should not be visible in the form by default.
- Clicking on submit should show a modal which would show the final values based on above calculations.

## Installation

To run the tax calculator locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tax-calculator.git

## Navigate to the project directory:
   cd tax-calculator
## Install the dependencies
   npm install
## Start the development server
  npm start
Open your browser and navigate to http://localhost:3000 to view the application.
## Usage
Enter your Gross Annual Income and Extra Income in the respective input fields.
Select your Age Group from the dropdown.
Click the "Calculate Tax" button to see the tax calculation results in a modal
##  Testing
npm test
This will run the test cases and display the results in the console.




