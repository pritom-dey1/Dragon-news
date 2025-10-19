# 📰 React News Website with Firebase Authentication

This project is a **React-based News Website** built to practice
**Firebase Authentication** and explore **private routing** concepts in
React Router.

------------------------------------------------------------------------

## 🚀 Features

-   🔐 User Authentication (Firebase Email/Password)
-   🧠 Private Routes (Only logged-in users can access certain pages)
-   📄 Dynamic Routing with React Router
-   🧩 Component-based architecture (clean folder structure)
-   ⚙️ Reusable Context API for managing auth state
-   🖥️ Responsive Layout Design

------------------------------------------------------------------------

## 🏗️ Project Structure

    src/
    ├── assets/
    ├── Components/
    │   ├── Header/
    │   └── Main/
    │       ├── LeftAside/
    │       ├── RightAside/
    │       └── SingleNews.jsx
    ├── Firebase/
    │   └── Firebase.config.js
    ├── layouts/
    │   ├── AuthLayout.jsx
    │   ├── Homelayout.jsx
    │   └── Singlepage.jsx
    ├── Pages/
    │   ├── CatNews.jsx
    │   ├── Login.jsx
    │   └── Register.jsx
    ├── Provider/
    │   ├── Authprovider.jsx
    │   └── PrivateRouter.jsx
    └── index.js

------------------------------------------------------------------------

## 🔧 Technologies Used

-   **React 18**
-   **React Router v6**
-   **Firebase Authentication**
-   **Context API (Auth Context)**
-   **JavaScript (ES6+)**
-   **CSS (Custom styling)**

------------------------------------------------------------------------

## 🧩 How It Works

1.  **AuthProvider.jsx** handles all authentication logic:

    -   Create account
    -   Login
    -   Logout
    -   Manage current user state

2.  **PrivateRouter.jsx** ensures that protected pages (like Single News
    pages) can only be accessed by logged-in users.

3.  **React Router** dynamically loads categories and news pages using
    `loaders`.

4.  **Firebase.config.js** contains your Firebase project credentials
    (Firebase SDK setup).

------------------------------------------------------------------------

## 🪜 Setup Instructions

### 1️⃣ Clone the Repository

``` bash
git clone https://github.com/your-username/react-news-auth.git
cd react-news-auth
```

### 2️⃣ Install Dependencies

``` bash
npm install
```

### 3️⃣ Configure Firebase

Create a file at `src/Firebase/Firebase.config.js` and add your Firebase
credentials:

``` javascript
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export default app;
```

### 4️⃣ Start the Development Server

``` bash
npm run dev
```

Then open the app at **http://localhost:5173/**

------------------------------------------------------------------------

## 📚 Learning Goals

-   Understand **Firebase Authentication** integration in React.
-   Learn how to **protect routes** using custom Private Route
    components.
-   Manage global state using **React Context API**.
-   Build modular, reusable **React components**.

------------------------------------------------------------------------

## 📜 License

This project is licensed under the **MIT License**. © 2025 BSPI Computer
Club --- All Rights Reserved.
