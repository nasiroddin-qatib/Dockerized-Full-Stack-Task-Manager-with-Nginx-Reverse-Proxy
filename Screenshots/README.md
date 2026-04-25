# 🚀 Dockerized Full Stack Task Manager with Nginx Reverse Proxy

---

## 📌 Project Overview

This project demonstrates a **complete Dockerized full-stack application** using Nginx, Node.js, and MySQL.

The application consists of a frontend UI, backend API, and database, all running as separate containers using Docker Compose.

Nginx acts as a **reverse proxy** to route API requests to the backend service.

The setup includes:

• Frontend served using Nginx  
• Backend built with Node.js (Express)  
• MySQL database for data storage  
• Reverse proxy routing using Nginx  
• Health checks for service reliability  

This architecture simulates a **real-world containerized application deployment**.

---

## 🧭 Architecture

User Request  
        │  
        ▼  
Nginx (Frontend + Reverse Proxy)  
        │  
        └── /api → Backend (Node.js)  
                         │  
                         ▼  
                     MySQL Database  

---

## ⚙️ Tech Stack

• HTML, CSS, JavaScript  
• Node.js (Express)  
• MySQL  
• Nginx  
• Docker  
• Docker Compose  

---

## 📂 Project Structure

Dockerized-Full-Stack-Task-Manager  
│  
├── backend  
│   ├── Dockerfile  
│   ├── app.js  
│   └── package.json  
│  
├── frontend  
│   ├── Dockerfile  
│   ├── index.html  
│   └── nginx.conf  
│  
├── Screenshots  
│   ├── EC2-server.png  
│   ├── app-browser-output.png  
│   └── tree.png  
│  
├── docker-compose.yml  
├── .env  
└── dockercompose.sh  

---

## ⚙️ Docker Services

Frontend  
• Nginx container serving UI  
• Handles reverse proxy  

Backend  
• Node.js Express API  
• Handles CRUD operations  

MySQL  
• Stores application data  
• Uses Docker volume for persistence  

---

## ▶️ Run the Project

docker-compose up -d  

Access the application:  
http://localhost  

---

## 🔌 API Endpoints

• GET /api/tasks  
• POST /api/tasks  
• DELETE /api/tasks/:id  

---

## 📸 Project Screenshots

### Application Output
![App](app-browser-output.png)

---

### EC2 / Deployment Environment
![EC2](EC2-server.png)

---

### Project Structure
![Tree](tree.png)
---

## 🎯 What This Project Demonstrates

• Docker multi-container architecture  
• Nginx reverse proxy configuration  
• Service-to-service communication  
• Container networking  
• Health checks and reliability  

---

## 👨‍💻 Author

Developed as part of hands-on practice to strengthen Docker, DevOps, and real-world deployment concepts.

---
