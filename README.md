Full-Stack Authentication System (MERN + JWT)

A fully functional authentication system built using **Node.js**, **Express**, **MongoDB**, **React**, **Tailwind CSS**, **JWT**, and deployed using **Render** (backend) + **Vercel** (frontend).

This project includes:

- User Signup  
- User Login  
- JWT Authentication  
- Protected Dashboard Route  
- Logout  
- Responsive UI (Tailwind CSS)  
- MongoDB Atlas integration  
- Full deployment pipeline  

---

## 🌐 **Live Demo**

### 🔸 **Frontend (Vercel)**  
➡️ https://your-frontend-link.vercel.app/

### 🔸 **Backend API (Render)**  
➡️ https://node-auth-fullstack.onrender.com/

---

## 📌 Features

- 🔐 Secure user authentication using **JWT**
- 🧂 Password hashing with **bcrypt**
- 🌍 Hosted on the cloud (Render + Vercel)
- 🔒 Protected dashboard route requiring login
- 🎨 Beautiful UI using **Tailwind CSS**
- 📡 Axios for API communication
- 🛠 REST API with Express + MongoDB
- 📁 Clean folder structure

---

## 🛠 Tech Stack

### **Frontend**
- React.js  
- Tailwind CSS  
- React Router  
- Axios  

### **Backend**
- Node.js  
- Express  
- MongoDB Atlas  
- Mongoose  
- JWT authentication  
- Bcrypt  

### **Deployment**
- **Render** (Backend)  
- **Vercel** (Frontend)  

---

## 📂 Folder Structure

```
NodeAssignment/
│── Backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│
│── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│
│── .gitignore
│── README.md
```

---

## 🚀 Installation Guide (For Local Development)

### **1️⃣ Clone the Repository**
```bash
git clone <your-repo-url>
cd NodeAssignment
```

---

## **2️⃣ Backend Setup**
```bash
cd Backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_atlas_string
JWT_SECRET=any_secret_key
PORT=5000
```

Start backend:
```bash
npm start
```

---

## **3️⃣ Frontend Setup**
```bash
cd ../frontend
npm install
npm start
```

---

## 🚀 Deployment (Production)

### **Backend → Render**
- Root Directory: `Backend`
- Build Command: `npm install`
- Start Command: `npm start`
- Add environment variables in Render dashboard.

### **Frontend → Vercel**
- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `build`

---

## 🔐 API Endpoints

### **Signup**
```
POST /auth/signup
```

### **Login**
```
POST /auth/login
```

### **Protected Dashboard**
```
GET /dashboard
Authorization: Bearer <token>
```




## ✨ Future Improvements
- Email verification (n8n workflow)
- Password reset
- User profile page
- Dark mode
- Better UI animations

---

## 👨‍💻 Author
**Aman Yadav**

