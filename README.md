🏘️ NeighbourHub – Frontend

NeighbourHub is a community-driven issue reporting platform where users can report local problems, upvote issues, and track their resolution status.
This repository contains the frontend built using React + Vite, designed for both users and admins.

🚀 Tech Stack

⚛️ React (with Hooks)

⚡ Vite (fast dev environment)

🌐 Axios / Fetch API (API communication)

🎨 CSS / Tailwind (optional, extendable)

🔐 JWT-based Authentication

🧭 React Router DOM

✨ Features
👤 User Features

Register & Login

Create new issues (title, description, category, location)

View all reported issues

Upvote issues (1 vote per user)

Track issue status (Open / In Progress / Resolved)

View issues created by the logged-in user

🛠️ Admin Features

Admin Dashboard with analytics

View total issues, users, votes

Change issue status (Open → In Progress → Resolved)

Delete any issue

Full moderation control

📂 Project Structure
src/
│
├── components/        # Reusable UI components
├── pages/             # Pages (Login, Register, Dashboard, AdminDashboard)
├── services/          # API calls
├── utils/             # Auth helpers
├── App.jsx            # Main app & routing
├── main.jsx           # Entry point

🔗 Backend Integration

This frontend connects to the NeighbourHub Backend (Node.js + Express + MongoDB).

Environment Variable

Create a .env file in root:

VITE_API_BASE_URL=http://localhost:5000/api

▶️ Getting Started
1️⃣ Install dependencies
npm install

2️⃣ Start development server
npm run dev


App will run at:

http://localhost:5173

🔐 Authentication Flow

JWT token stored in localStorage

Token attached in Authorization header

Role-based UI (Admin vs User)

Protected routes for admin dashboard

📊 Admin Dashboard Metrics

Total Issues

Open / In-Progress / Resolved issues

Total Users

Total Votes

🧠 Future Enhancements

Comments on issues

Image upload

Search & filter issues

Notifications

Mobile responsive UI

Role-based route guards

👨‍💻 Author

Gokul S
Frontend + Backend Developer
Project built for learning full-stack MERN architecture with real-world patterns.
