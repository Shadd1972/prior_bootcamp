# prior_bootcamp
food order app files

Food Ordering Web App – Local Setup Guide
Food Ordering Web App – Local Setup Guide

This guide walks you through setting up both the front-end and back-end of the Food Ordering Web App on your local machine using a web browser. You’ll be able to log in as a customer, place an order, and also log in as an admin to manage the app.

---

✅ Prerequisites

- Node.js (v16 or later)
- npm (comes with Node.js)
- A code editor like VS Code (optional)
- Terminal / Command Prompt

---

📦 Project Structure

- `Food Order App_Node Server_Shadd_S` – The **backend** API server.
- `Food Order App_React2_Shadd_S` – The **frontend** React app.

---

🔧 Step 1: Set Up the Backend

1. Open a terminal and navigate to the backend folder:

cd "Final project/Food Order App_Node Server_Shadd_S"

2. Install dependencies (if any):

npm install

3. Start the backend server:

node server.js

The backend will run at: **http://localhost:8080**

---

🎨 Step 2: Set Up the Frontend (React App)

1. Open another terminal window and navigate to the frontend folder:

cd "Final project/Food Order App_React2_Shadd_S"

2. Install dependencies:

npm install

3. Start the React app:

npm start

This will launch the app in your browser at: **http://localhost:3000**

---

👥 Step 3: Using the App

Log in as a Customer

- Launch the app at http://localhost:3000
- Click "Login"
- Use credentials from the `users.json` file in backend (e.g., email/password)

Place an Order

- Browse the menu.
- Add items to cart.
- Proceed to checkout and confirm your order.

Log in as Admin

- Admin credentials will be listed in `users.json`.
- Admin dashboard may include user and menu management (depending on implementation).

---

🛠 Troubleshooting

- If ports conflict, make sure nothing else is using **8080** or **3000**.
- If the React app can't connect to the API, make sure the backend is running and CORS is enabled.

---

📁 Files of Interest

- Frontend entry: `src/index.js`, `src/App.js`
- Backend entry: `server.js`, `app/handlers`, `app/data`

---
👥 Future options
- Want to work on getting this actually deployed on AWS as a standalone Internet available app for others to play around with


✅ You're Ready!

You can now simulate logging in, placing orders, and managing users — all from your local machine.
