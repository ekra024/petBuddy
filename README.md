# 🐾 PetBuddy

[![Website](https://img.shields.io/badge/Live-Demo-blue?style=flat-square)](https://petbuddy-31d79.web.app/)
[![Server](https://img.shields.io/badge/GitHub-Repo-black?style=flat-square&logo=github)](https://github.com/ekra024/pet_buddy_server)


**PetBuddy** is a full-stack pet adoption and donation platform that connects pet owners, adopters, and donors. Built with modern web technologies, it provides a seamless user experience with a role-based dashboard for users, admins, and donors.

email: admin@gmail.com
password: 123456Aa

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
| Tailwind CSS | Express.js |  | TanStack Query |
| React Router | Firebase Auth | | React Hook Form |
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
VITE_apiKey="your_api_key"
VITE_authDomain="your_auth_domain"
VITE_projectId="your_project_id"
VITE_storageBucket="your_storage_bucket"
VITE_messagingSenderId="your_messaging_sender_id"
VITE_appId="your_app_id"
VITE_API_URL="https://backend-sigma-flame-93.vercel.app/api"
VITE_image_upload_key=your_image_upload_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key 

To run
npm run dev



