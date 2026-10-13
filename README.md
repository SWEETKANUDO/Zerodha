# 📈 Zerodha Clone & Kite Trading Dashboard

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-00C7A9?style=for-the-badge" alt="MERN Stack" />
  <img src="https://img.shields.io/badge/React.js-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>

<p align="center">
  A full-stack stock trading interface inspired by Zerodha, featuring a public landing page, a Kite-style trading dashboard, and a shared Node.js backend.
</p>

<p align="center">
  <a href="https://zerodha-tau-ten.vercel.app/"><strong>🌐 Zerodha Website</strong></a>
  &nbsp; • &nbsp;
  <a href="https://kite-rust.vercel.app/"><strong>📊 Kite Dashboard</strong></a>
  &nbsp; • &nbsp;
  <a href="https://zerodha-7dsd.onrender.com/allHoldings"><strong>⚙️ Backend API</strong></a>
</p>

---

## 🚀 Project Overview

This project combines two separate React applications with a shared backend API.

The **Zerodha frontend** provides the public-facing website, while the **Kite dashboard** provides a trading-style interface for viewing holdings, positions, orders, funds, and other dashboard sections.

The Node.js and Express backend exposes API endpoints and connects to MongoDB for data storage.

## 🌐 Live Projects

| Application | Description | Live Link |
|---|---|---|
| 🌐 Zerodha Frontend | Public landing website inspired by Zerodha | [Open Website](https://zerodha-tau-ten.vercel.app/) |
| 📊 Kite Dashboard | Trading dashboard interface | [Open Dashboard](https://kite-rust.vercel.app/) |
| ⚙️ Backend API | Express API for application data | [View Holdings API](https://zerodha-7dsd.onrender.com/allHoldings) |

## ✨ Key Features

### 🌐 Zerodha Frontend
- Clean, modern brokerage-style landing page.
- Responsive website layout.
- Navigation across the website's sections.
- Separate frontend deployment.

### 📊 Kite Dashboard
- Dashboard summary and portfolio overview.
- Holdings and positions views.
- Orders and funds sections.
- Watchlist interface.
- Charts and data visualization.
- React-based component structure.
- API integration with the backend.

### ⚙️ Backend
- Node.js and Express REST API.
- MongoDB database integration using Mongoose.
- Holdings, positions, and orders data handling.
- API endpoints for retrieving and managing application data.
- CORS support for frontend communication.

## 🧰 Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive layouts |
| JavaScript | Application logic |
| React.js | Frontend and dashboard UI |
| React Router | Frontend navigation |
| Material UI | Dashboard components |
| Axios | HTTP requests |
| Chart.js | Charts and visualization |
| Node.js | Backend runtime |
| Express.js | REST API |
| MongoDB | Data storage |
| Mongoose | Database modeling |
| Git & GitHub | Version control |
| Vercel | Frontend deployments |
| Render | Backend deployment |

## 🏗️ Architecture

```text
             ZERODHA CLONE PROJECT
                       |
          +------------+------------+
          |                         |
          v                         v
  Zerodha Frontend             Kite Dashboard
      React.js                    React.js
          |                         |
          +------------+------------+
                       |
                       | HTTP / REST API
                       v
                Express Backend
                  Node.js
                       |
                       v
                    MongoDB

Frontend deployments: Vercel
Backend deployment: Render
```

Both frontend applications are deployed separately and can communicate with the shared backend API.

## 📁 Project Structure

```text
Zerodha/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
├── dashboard/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

*The structure above represents the three main project areas. Exact filenames may differ in the repository.*

## ⚙️ Run Locally

### Prerequisites

- Node.js and npm
- MongoDB local installation or MongoDB Atlas
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/SWEETKANUDO/Zerodha.git
cd Zerodha
```

### 2. Start the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
```

Add any other environment variables required by your backend.

Start the backend using the script configured in `backend/package.json`:

```bash
npm start
```

If your project uses a development script, run `npm run dev` instead.

### 3. Start the Kite Dashboard

Open a new terminal:

```bash
cd dashboard
npm install
npm run dev
```

If the dashboard uses Vite, the terminal will show its local development URL.

### 4. Start the Zerodha Frontend

Open another terminal:

```bash
cd frontend
npm install
npm start
```

Use `npm run dev` instead if that is the script defined in your frontend's `package.json`.

> **Important:** The dashboard and public frontend must use the correct backend API URL. For local development, use your local backend address; for production, use the deployed Render backend URL.

## 🔌 API Endpoints

**Base URL:** `https://zerodha-7dsd.onrender.com`

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/allHoldings` | Retrieve holdings data |
| GET | `/allPositions` | Retrieve positions data |
| POST | `/newOrder` | Submit an order request |

Example request:

```http
GET https://zerodha-7dsd.onrender.com/allHoldings
```

The API endpoint above can be opened directly in a browser to inspect its response.

## ☁️ Deployment

### Frontend Applications — Vercel

The two frontend applications are deployed independently:

- **Zerodha frontend:** [zerodha-tau-ten.vercel.app](https://zerodha-tau-ten.vercel.app/)
- **Kite dashboard:** [kite-rust.vercel.app](https://kite-rust.vercel.app/)

### Backend — Render

The backend API is hosted on Render:

- **Holdings endpoint:** [zerodha-7dsd.onrender.com/allHoldings](https://zerodha-7dsd.onrender.com/allHoldings)

Keep database credentials and other private configuration in environment variables. Never commit real secrets to GitHub.

## 📚 What I Learned

Through this project, I practiced:

- Building React applications with reusable components.
- Separating frontend applications from backend services.
- Creating REST API endpoints using Express.js.
- Connecting MongoDB with Mongoose.
- Fetching backend data from a React frontend.
- Using Axios for API communication.
- Working with charts and dashboard layouts.
- Deploying frontend and backend applications independently.
- Managing project source code using Git and GitHub.

## 🔮 Future Improvements

- User authentication and protected dashboard routes.
- Improved API validation and error handling.
- Enhanced portfolio charts and statistics.
- Better mobile responsiveness.
- Loading states and API error messages.
- More advanced watchlist interactions.

## 👨‍💻 Author

**Mihir Bhuva**

Aspiring Full Stack Developer | MERN Stack

- 🌐 Portfolio: [Visit My Portfolio](https://mihir-bhuva-portfolio.vercel.app/)
- 💻 GitHub: [@SWEETKANUDO](https://github.com/SWEETKANUDO)
- 🔗 LinkedIn: [Connect on LinkedIn](https://www.linkedin.com/in/mihir-bhuva-5422562b9)

---

<p align="center">
  <strong>📈 Learn. Build. Improve.</strong>
  <br />
  Built with ❤️ using the MERN stack.
</p>

<p align="center">
  ⭐ If you find this project interesting, consider starring the repository!
</p>
