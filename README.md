# 🐾 PetBuddy

[![Website](https://img.shields.io/badge/Live-Demo-blue?style=flat-square)](https://petbuddy-31d79.web.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?style=flat-square&logo=github)](https://github.com/ekra024/pet_buddy_server)


**PetBuddy** is a full-stack pet adoption and donation platform that connects pet owners, adopters, and donors. Built with modern web technologies, it provides a seamless user experience with a role-based dashboard for users, admins, and donors.

---

## 🌟 Features

### **For Users**
- Add and manage pets for adoption
- Submit adoption requests
- Create and manage donation campaigns
- Track donations and campaign status
- Responsive and modern UI/UX

### **For Admin**
- View all pets, donations, and campaigns
- Pause or unpause campaigns
- Dashboard with platform analytics
- Role-based access control

### **Shared**
- Authentication & authorization
- Responsive design for desktop, tablet, and mobile
- Modern interactive UI with animations

---


## 🛠️ Tech Stack

| Frontend | Backend | Database | Other Tools |
|----------|--------|----------|------------|
| React | Node.js | MongoDB | Firebase Authentication |
| Tailwind CSS | Express.js | Mongoose | TanStack Query |
| React Router | Firebase Auth | Cloud Firestore | React Hook Form |
| Framer Motion | Stripe (Payment Integration) | | React Icons |

---

## ⚡ Key Highlights
- Fully responsive design with **Tailwind CSS**  
- **Role-based dashboards** (User/Admin)  
- **Dynamic tables** with TanStack Table  
- **Form validation & error handling** using React Hook Form  
- Real-time updates for adoption requests and donations  
- Deployed live using **Firebase Hosting**

---

## 🚀 Installation / Running Locally

1. Clone the repository:
```bash
git clone https://github.com/YourUsername/PetBuddy.git

cd pet_buddy
npm install

.env.local
VITE_apiKey=AIzaSyCC8VgVvNyZ52u2rxdrlHGZE-Gvn8ZZwvA
VITE_authDomain=petbuddy-31d79.firebaseapp.com
VITE_projectId=petbuddy-31d79
VITE_storageBucket=petbuddy-31d79.firebaseapp.com
VITE_messagingSenderId=23598558324
VITE_appId=1:23598558324:web:02502fb0b647901f557521
VITE_image_upload_key=945928535d54eb87b7ab96e9ed697aba
VITE_STRIPE_PUBLIC_KEY=pk_test_51QluNYGhZNGe7xGSBrcXyfsrhh0Mp7HSulzV28xGhzKCJP6qYCuNHiAFH2JmNiEvO17Q4DXUZDFroOXqLBugS43A00aQfpqEUM

To run
npm run dev



