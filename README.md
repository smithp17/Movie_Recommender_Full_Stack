# Movie Watchlist & Task Management System

## 📖 Project Overview
The **Movie Watchlist & Task Management System** is a full-stack web application that allows users to:
- 📋 Add, edit, and delete movies from their watchlist.
- 🎬 Mark movies as "Watched" or "Watch".
- ✅ Perform CRUD (Create, Read, Update, Delete) operations seamlessly.
- 🔒 Use secure authentication with JWT tokens.

## 🗂️ Technologies Used
- **Frontend:** React (TypeScript) with Axios and React Router DOM  
- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL  
- **Authentication:** JWT (JSON Web Tokens)  
- **Deployment:** Can be deployed using free platforms like Render, Vercel, or Railway.

---

## 🚀 Project Workflow

### 1. **User Authentication**
- Users can register and log in with a username and password.
- Upon successful login, a JWT token is generated and stored in the browser's local storage.
- Protected routes (like the watchlist dashboard) are accessible only with a valid token.

### 2. **Task (Movie) Management**
- Users can add movies with titles and descriptions.
- Existing movies can be edited, deleted, or marked as watched/unwatched.
- The frontend sends HTTP requests to the backend, which interacts with the PostgreSQL database.

### 3. **Marking as Watched/Unwatched**
- Clicking the "👀 Watch" button changes it to "✅ Watched" and updates the `iscomplete` field in the database.
- Clicking "✅ Watched" reverts it to "👀 Watch" and sets `iscomplete` to `false`.
- Both frontend and backend update instantly without needing to refresh.

### 4. **Frontend & Backend Communication**
- **Axios** handles HTTP requests with appropriate headers, including the JWT token for protected routes.
- Responses are displayed immediately on the frontend, ensuring a smooth user experience.

---

## 💻 How to Run the Project Locally

### 1. **Clone the Repository**
```bash
git clone https://github.com/your-username/movie-watchlist-app.git
cd movie-watchlist-app
```

### 2. **Backend Setup**
```bash
cd backend
npm install
```
#### Create a `.env` file with the following content:
```env
PORT=5000
DATABASE_URL=postgresql://postgres:1234@localhost:5432/Movies
JWT_SECRET=your_jwt_secret (any random key)
```
#### Run the backend server:
```bash
npm start
```
✅ Server runs on `http://localhost:5000`

---

### 3. **Frontend Setup**
```bash
cd frontend
npm install
npm start
```
✅ Frontend runs on `http://localhost:3000`

---

## 📝 How to Use the Application
1. **Register or log in** to gain access to the dashboard.
2. Navigate to **Task Management** to:
   - Add a new movie with a title and optional description.
   - Mark movies as watched/unwatched using the 👀/✅ button.
   - Edit movie details.
   - Delete movies from your watchlist.
3. All actions reflect immediately both in the UI and the database.

---

## 🌐 Deployment Options (Free Platforms)
- **Frontend:** Vercel or Netlify
- **Backend:** Render or Railway
- **Database:** Hosted PostgreSQL via Railway or Supabase

> 🔔 *Instructions for deployment are available in the `DEPLOYMENT.md` file.*

---

## 🏆 Features at a Glance
✅ User authentication with JWT  
✅ CRUD operations on tasks  
✅ Instant frontend updates upon changes  
✅ Protected routes with token validation  
✅ Simple and user-friendly UI  

---

## 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📬 Contact
For any questions or support, reach out via [email@example.com](mailto:email@example.com).

---

## 📝 License
This project is licensed under the MIT License. See the `LICENSE` file for details.

