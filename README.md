# Google Sheets Clone

This is a web application that mimics the core functionalities of Google Sheets. It includes a spreadsheet interface with drag-and-drop functionality, mathematical functions, and data quality functions.

---

## Features

### Spreadsheet Interface
- **Mimic Google Sheets UI**: A visual design and layout that closely resembles Google Sheets, including a toolbar, formula bar, and cell structure.
- **Drag Functionality**: Drag and drop cell content, formulas, and selections.
- **Cell Dependencies**: Formulas and functions accurately reflect cell dependencies and update when related cells change.
- **Basic Cell Formatting**: Support for bold, italics, font size, and color.
- **Add/Delete Rows and Columns**: Ability to add, delete, and resize rows and columns.

### Mathematical Functions
- **SUM**: Calculates the sum of a range of cells.
- **AVERAGE**: Calculates the average of a range of cells.
- **MAX**: Returns the maximum value from a range of cells.
- **MIN**: Returns the minimum value from a range of cells.
- **COUNT**: Counts the number of cells containing numerical values in a range.

### Data Quality Functions
- **TRIM**: Removes leading and trailing whitespace from a cell.
- **UPPER**: Converts the text in a cell to uppercase.
- **LOWER**: Converts the text in a cell to lowercase.
- **REMOVE_DUPLICATES**: Removes duplicate rows from a selected range.
- **FIND_AND_REPLACE**: Allows users to find and replace specific text within a range of cells.

---

## Tech Stack

### Frontend
- **React.js**: For building the dynamic and responsive user interface.
- **React-DnD**: For implementing drag-and-drop functionality.

### Backend
- **Node.js**: For handling server-side logic.
- **Express.js**: For creating RESTful APIs.
- **CORS**: For enabling cross-origin requests.

---

## How to Run

### Prerequisites
1. **Node.js**: Make sure Node.js is installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).
2. **npm**: npm is installed automatically with Node.js.

### Steps to Run the Application

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/google-sheets-clone.git
   cd google-sheets-clone
Set Up the Backend:

Navigate to the backend folder:
cd backend

Install dependencies:
npm install

Start the backend server:
node index.js

The backend will run on http://localhost:5000.

Set Up the Frontend:

Open a new terminal and navigate to the frontend folder:
cd ../frontend

Install dependencies:
npm install

Start the frontend development server:
npm start

The frontend will run on http://localhost:3000.

Test the Application:

Open your browser and go to http://localhost:3000.

You should see the Google Sheets clone application.

Folder Structure
google-sheets-clone/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── Cell.js
│   │   ├── App.css
│   ├── package.json
│   └── package-lock.json
├── backend/
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
└── README.md

Code Quality and Maintainability
Modular Code: The code is organized into reusable components (e.g., Cell.js).

Error Handling: Basic error handling is implemented in the backend APIs.

Comments: The code is well-commented for better understanding.

Bonus Features-
Save and Load Spreadsheets: Allow users to save and load their spreadsheets.

Data Visualization: Add support for charts and graphs using libraries like Chart.js.

Complex Formulas: Implement relative and absolute cell referencing.

