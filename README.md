# SUPERTECH Metal Ceilings Website

A modern, responsive website for SUPERTECH Metal Ceilings built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

## Project Overview

This website showcases SUPERTECH Metal Ceilings' products, services, and expertise in architectural metalwork, including metal ceilings, louvers, cladding, cubicles, and flooring systems.

## Features

- Responsive design optimized for all devices
- Interactive product catalog with filtering options
- Project showcase with detailed case studies
- Blog section for thought leadership content
- Contact form with form validation
- Admin panel for content management (planned for future development)

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- React Bootstrap for UI components
- SASS for custom styling
- Framer Motion for animations
- Axios for API requests

### Backend
- Node.js with Express.js
- MongoDB for database
- Mongoose for object modeling
- Nodemailer for contact form functionality

## Project Structure

```
supertech/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   └── src/                # React source files
│       ├── assets/         # Images, fonts, etc.
│       ├── components/     # Reusable components
│       ├── pages/          # Page components
│       └── styles/         # SASS stylesheets
└── server/                 # Backend Node.js/Express application
    ├── models/             # MongoDB models
    └── routes/             # API routes
```

## Setup and Installation

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### Installation Steps

1. Clone the repository
```
git clone <repository-url>
cd supertech
```

2. Install server dependencies
```
cd server
npm install
```

3. Install client dependencies
```
cd ../client
npm install
```

4. Create a `.env` file in the server directory with the following variables:
```
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
EMAIL_SERVICE=<your-email-service>
EMAIL_USERNAME=<your-email-username>
EMAIL_PASSWORD=<your-email-password>
RECIPIENT_EMAIL=<recipient-email-address>
```

5. Start the development server
```
# In the server directory
npm run dev

# In the client directory (in a separate terminal)
npm start
```

6. Access the website at `http://localhost:3000`

## Deployment

The application can be deployed using platforms like Heroku, Vercel, or AWS:

1. Build the React application
```
cd client
npm run build
```

2. Deploy the server which will serve the built React app
```
cd ../server
npm start
```

## Future Enhancements

- Admin panel for content management
- Product inquiry and quotation system
- Interactive 3D product visualization
- Multi-language support
- Online product customization tool

## License

This project is proprietary and confidential. All rights reserved.

## Contact

For any inquiries about this project, please contact:
- info@supertechmetal.in
