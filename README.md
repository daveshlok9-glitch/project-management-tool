Make sure MongoDB is installed in your system


# 📋 Project Management Tool (MERN Stack)

A full-stack Project Management Tool built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to register, log in, create projects, manage tasks, collaborate through comments, and visualize project progress with a Kanban board and timeline.

---

# 🚀 Features

## 🔐 User Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

## 📁 Project Management
- Create Projects
- View All Projects
- Update Project Details
- Delete Projects

## ✅ Task Management
- Create Tasks
- Update Tasks
- Delete Tasks
- Track Task Progress

## 📌 Kanban Board
- Organize tasks into:
  - To Do
  - In Progress
  - Done

## 💬 Team Collaboration
- Add comments to tasks
- View comments for each task

## 📊 Analytics Dashboard
- Total Projects
- Total Tasks
- Completed Tasks
- Pending Tasks

## 📅 Project Timeline
- Gantt-style timeline view for projects

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Axios

## Backend
- Node.js
- Express.js

## Database
- MongoDB

## Authentication
- JSON Web Token (JWT)

---

# 📂 Project Structure

```
project-management-tool/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/daveshlok9-glitch/project-management-tool.git
```

```bash
cd project-management-tool
```

---

## 2. Backend Setup

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/project_management

JWT_SECRET=your_super_secret_key
```

Start the backend

```bash
npm run dev
```

---

## 3. Frontend Setup

Open another terminal

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run the frontend

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

# 🗄️ MongoDB Setup

This project uses a **local MongoDB database**.

### Install MongoDB Community Edition

Download MongoDB Community Server:

https://www.mongodb.com/try/download/community

After installation:

1. Start the MongoDB service.
2. Ensure MongoDB is running.
3. The backend connects automatically using:

```
mongodb://127.0.0.1:27017/project_management
```

**Note:** This project currently uses a local MongoDB instance. MongoDB Atlas is **not required** to run the application.

---

# 📡 API Routes

## Authentication

```
POST /api/auth/register
POST /api/auth/login
```

## Projects

```
GET    /api/projects
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
```

## Tasks

```
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

## Comments

```
GET  /api/comments/:taskId
POST /api/comments
```

## Analytics

```
GET /api/analytics
```

---

# 🔒 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/project_management

JWT_SECRET=your_super_secret_key
```

---

# 📸 Screenshots

You can add screenshots of the application here later.

Example:

```
screenshots/
│
├── login.png
├── register.png
├── dashboard.png
├── projects.png
├── tasks.png
├── analytics.png
└── timeline.png
```

---

# 📈 Future Improvements

- Role-based access control
- Team invitations
- Email notifications
- File attachments
- Calendar integration
- Real-time collaboration
- Drag-and-drop Kanban board
- Better UI/UX
- MongoDB Atlas support
- Project deployment

---

# 👨‍💻 Author

**Shlok Dave**

MERN Stack Developer (Learning)

GitHub:
https://github.com/daveshlok9-glitch

---

# 📄 License

This project was developed for educational purposes as part of a MERN Stack learning journey and college/AICTE project submission.

Feel free to use and modify it for learning purposes.
