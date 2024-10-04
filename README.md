# Main Website Backend

## Project Title and Description
Main Website Backend is a server-side application that handles contact form submissions. It sends emails to the site administrator using Nodemailer. The API handles email sending requests from the frontend.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Send emails via a contact form
- Nodemailer integration for email sending
- CORS enabled for frontend-backend communication

## Installation

### Prerequisites
- Node.js (v12 or higher)
- npm (v6 or higher)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/main-website-backend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd main-website-backend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

### Set up Environment Variables

To run this application, you'll need to set up several environment variables. Follow these steps:

1. **Create a `.env` file:**  
   In the root directory of your project, create a file named `.env` where you will store these variables.

2. **Define the required environment variables:**  
   Add the following variables to your `.env` file. Replace placeholder values with your actual credentials.

    ```env
    PORT=5000
    EMAIL_HOST=smtp.your-email-provider.com
    EMAIL_PORT=465
    EMAIL_USER=your_email@example.com
    EMAIL_PASSWORD=your_email_password
    ```

3. **Secure your environment variables:**  
   Ensure your `.env` file is included in your `.gitignore` file to avoid exposing sensitive data.

## Usage

To start the application, use the following command:

```bash
npm start
```

The server will run on the specified port (default is 5000). You can access the API endpoints through [http://localhost:5000](http://localhost:5000).

## Backend Information

The backend for this project is hosted at the following URL: 

**Backend API:** https://main-website-backend-f90ccd0e7203.herokuapp.com/

The API endpoints and detailed documentation on how to interact with the backend are provided in this README.

## Frontend Information

The frontend for this project is hosted at the following URL:

**Frontend Application:** [Frontend Link Here]

You can access and interact with the application directly through this link. The frontend is designed to work seamlessly with the backend API.

**Frontend Repository:** [Frontend Repository Link Here]

## API Endpoints

<table>
  <tr>
    <th style="background-color:#d6eaf8; color:#000000;">HTTP Method</th>
    <th style="background-color:#d6eaf8; color:#000000;">Endpoint</th>
    <th style="background-color:#d6eaf8; color:#000000;">Description</th>
    <th style="background-color:#d6eaf8; color:#000000;">Request Example</th>
    <th style="background-color:#d6eaf8; color:#000000;">Response Example</th>
    <th style="background-color:#d6eaf8; color:#000000;">Authorization Required</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/contact</td>
    <td>Send a contact message via email</td>
    <td>{ "email": "user@example.com", "message": "Hello, I have a question." }</td>
    <td>{ "message": "Email sent successfully" }</td>
    <td>No</td>
  </tr>
</table>

## Project Structure

```css
Main-Website-Backend/
├── src/
│   ├── routes.js
│   ├── server.js
├── .gitignore
├── package-lock.json
├── package.json
├── .env
```

## Technologies Used

[![Node.js Badge](https://img.shields.io/badge/-Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](#)
[![Express Badge](https://img.shields.io/badge/-Express-000000?style=for-the-badge&logo=express&logoColor=white)](#)

## Third-Party Libraries

- **Nodemailer**: For sending emails from the contact form.
- **CORS**: Middleware for enabling cross-origin requests between the frontend and backend.
- **dotenv**: For handling environment variables securely.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
