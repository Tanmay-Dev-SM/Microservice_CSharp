# 🛒 Microservice Auction App

This project is a full-stack microservices-based auction platform with live bidding updates.

---

## 🚀 Getting Started

!Note: This project is not deployed 24/7 because running it continuously on cloud services would incur costs. It is intended as a practice project. However, anyone who wishes to deploy it can do so easily since all configuration and package management are handled through Docker Compose. Kubernetes can also be used for deployment if preferred.

Follow these steps to run the project locally:

### 1. Start the Services

Run the following command to bring up all backend services and the frontend:

```bash
docker-compose up -d
```

### 2. Access the Frontend

Open your browser and navigate to:

```
http://localhost:3000
```

### 3. Sign In to the App

You can sign in with a test user or create a new one.

**Prebuilt Test Users:**

| Username | Password  |
|:--------:|:---------:|
| alice    | Pass123$  |
| bob      | Pass123$  |

---

## 🎯 Live Bidding

- After logging in, participate in **live auctions**.
- **Switch users** (e.g., Alice and Bob) to see real-time bid updates.
- Even if **not signed in**, you can still **view live bid updates** as a guest.

---

## 📦 Tech Stack

- **Frontend**: Next.js / TypeScript
- **Backend**: ASP.NET Core Microservices
- **Messaging**: RabbitMQ
- **Authentication**: Identity Service
- **Database**: PostgreSQL, MongoDB
- **Containerization**: Docker & Docker Compose
- **Real-time Updates**: SignalR / WebSocket-based

---

## 🛠️ Notes

- Make sure Docker is installed and running before executing:

  ```bash
  docker-compose up -d
  ```

- Environment variables like API URLs and authentication secrets are managed internally inside the `docker-compose.yml` file.

---

## HLD System

<img width="3208" height="1840" alt="SystemDesigne-5" src="https://github.com/user-attachments/assets/f2bfaef6-7ac0-4549-8ded-29a5b0c0bb9b" />

---
