# 🛒 Full Stack E-Commerce Backend (Auth + Product + Cart)

A secure and modular backend application built with **Node.js, Express, MongoDB, and JWT Authentication**, along with a simple React frontend for authentication.

---

🔗 **Project Drive Link:**  
https://drive.google.com/file/d/1cTZQ0VdDM7jZjHtoZ43iFWmbDODsaUbG/view?usp=sharing

---

## 🚀 Features

### 🔐 Authentication

- User Registration
- User Login
- JWT-based Authentication
- HTTP-only Cookies
- Secure Password Hashing (bcrypt)
- Protected Routes Middleware

### 🛡 Role-Based Access Control (RBAC)

- User role
- Admin role
- Admin-only product management routes

### 📦 Product Module

- Create Product (Admin)
- Get All Products
- Get Single Product
- Update Product (Admin)
- Delete Product (Admin)
- Stock Management

### 🛒 Cart Module

- Add to Cart
- Get User Cart
- Remove from Cart
- Cart linked to authenticated user

---

## 🧱 Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- cookie-parser
- cors
- dotenv

### Frontend

- React
- React Router
- Axios
- shadcn-ui
- Tailwind CSS

---

## 📁 Project Structure

```
backend/
├── src/
│    ├── controllers/
│    ├── models/
│    ├── routes/
│    ├── middleware/
│    ├── seed/
│    └── index.js
│
├── .env
└── package.json

frontend/
├── src/
│    ├── pages/
│    └── App.jsx

```

---

## ⚙️ Environment Variables

Create a `.env` file in backend root:

```

PORT=5000
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your-secret-key
ACCESS_TOKEN_EXPIRY=number-of-days
REFRESH_TOKEN_SECRET=your-secret-key
REFRESH_TOKEN_EXPIRY=number-of-days

SEED_ADMIN_NAME=Admin
SEED_ADMIN_EMAIL=[admin@example.com](mailto:admin@example.com)
SEED_ADMIN_PASSWORD=Admin@123

```

---

## 🧪 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd project-folder
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔐 Authentication Flow

1. User logs in
2. Backend generates JWT
3. Token stored in HTTP-only cookie
4. Browser automatically sends cookie
5. Protected routes verify token

---

## 🛡 CORS Configuration

Backend configured with:

```js
cors({
  origin: "http://localhost:5173",
  credentials: true,
});
```

Frontend requests use:

```js
withCredentials: true;
```

---

## 🎯 Future Improvements

- Order Management
- Payment Integration
- Product Image Upload
- Pagination & Filtering
- Refresh Token Rotation
- Deployment (Render / Vercel)

---

## 📌 Author

Rajendra Behera

---