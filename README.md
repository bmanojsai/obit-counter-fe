# Obit Counter

Obit Counter is a web application designed to help users count the number of obituaries listed on a website over a specified number of days. This tool is particularly useful for researchers, analysts, or anyone who needs to track obituary data from online sources.

## Features

- **Dynamic Form**: Users can input the URL of the obituary listings, specify the number of days to analyze, and provide unique identifiers for the obituary list and pagination.
- **Real-Time Feedback**: The application provides immediate feedback on the success or failure of the data retrieval process.
- **Responsive Design**: The interface is optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: React (with Vite for development and build tooling)
- **Styling**: Tailwind CSS
- **Form Validation**: React Hook Form with Zod for schema-based validation
- **State Management**: React Query for handling API calls and caching
- **Icons**: Lordicon for animated icons

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd obit-count-fe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Usage

1. Fill in the form with the required details:
   - **URL**: The URL of the obituary listings.
   - **Number of Days**: The time range for counting obituaries.
   - **Unique Identifiers**: Fields to identify specific elements on the webpage, such as the obituary list, pagination, and optionally, the date associated with each obituary.
2. Click the "Submit" button.
3. View the results, which display the total number of obituaries found within the specified time range.

## API Integration

The application interacts with a backend API to fetch obituary data. The API endpoint is:
```
POST http://localhost:3000/obituaries/count
```
The request payload includes the URL, number of days, and optional identifiers for parsing the webpage.

## Development

### File Structure

- **src/**: Contains the main application code.
  - **components/**: Reusable UI components.
  - **App.jsx**: The main application component.
  - **main.jsx**: Entry point for the React application.
- **public/**: Static assets.
- **lib/**: Utility functions.

### Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality issues.

## License

This project is licensed under the MIT License.
