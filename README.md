# Any Store
A modern e-commerce web application built using React, Redux, Firebase, Express, and Stripe. This project features authentication, product listing, and payment functionality, offering a smooth shopping experience for users.

Hosted at [Any Store](https://any-store.onrender.com/)

## Technologies Used

- **Vite**: A fast and optimized build tool for modern web development.
- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for managing application state.
- **Firebase**: Provides authentication and cloud storage for user data and product information.
- **Express**: Web server framework for handling backend requests.
- **Mantine UI**: A React component library for building modern user interfaces.
- **Stripe**: Payment processing platform for handling online payments.
- **scss**:  for styling

## Features

- **Authentication**: User sign-up, login, and logout via Firebase Authentication.
- **Product Listing**: Dynamic product listings fetched from Firebase Firestore.
- **Cart Management**: Add products to the cart, view the cart, and manage quantities.
- **Stripe Payment**: Secure payment processing via Stripe.

## Project Structure

client/
├── dist/                  # Build output
├── node_modules/          # Frontend dependencies
├── public/               # Static assets
├── src/
│   ├── assets/          # Images and static files
│   ├── Components/      # Reusable components
│   ├── data/           # Static data files
│   ├── firebase/       # Firebase configuration
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── redux/          # Redux store and slices
│   ├── routes/         # Route definitions
│   ├── App.jsx         # Main application component
│   ├── App.scss        # Global styles
│   └── main.jsx        # Entry point
├── .env                # Environment variables
├── .gitignore         # Git ignore rules
├── eslint.config.js   # ESLint configuration
├── index.html         # HTML template
├── package.json       # Frontend dependencies and scripts
├── package-lock.json  # Dependency lock file
└── vite.config.js     # Vite configuration

server/
├── node_modules/      # Backend dependencies
├── .env              # Backend environment variables
├── .gitignore        # Backend git ignore rules
├── package.json      # Backend dependencies and scripts
├── package-lock.json # Backend dependency lock file
└── server.js         # Main server file


## Installation and Setup

1. Clone the repository:

   ```bash
   git clone git@github.com:birukabza/Ecommerce-web.git
   cd any-store

2. Install dependencies for both the client and server:

    For the client:
    ```bash
    cd client
    npm install

    <!--For the server:-->
    ```bash
    cd server
    npm install


3. Configuration
    Create a .env file in the server directory and add your Stripe credentials:
    STRIPE_SECRET_KEY=your-stripe-secret-key
    STRIPE_PUBLISHABLE_KEY=your-stripe-public-key


Running the Project
4. Start the development server:

    For the client:
    ```bash
    cd client
    npm run dev

    <!--For the server:-->
    
    cd server
    npm start


Deployment
This project is deployed on Render.com, with both the front-end and back-end hosted separately.


Acknowledgements
Thanks to the developers behind the libraries and tools used in this project!

This README provides a clear setup guide for both the client and server, configuration details for the environment variables, and instructions for running and deploying the project. You can modify the URLs and keys to fit your actual setup.
