# 🏫 School Management System API

A RESTful API built with **Node.js**, **Express**, and **MongoDB** for managing student records in a school environment. The API supports full CRUD operations and follows a clean MVC architecture.

---

## 🚀 Tech Stack

- **Runtime:** Node.js v24+
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Module System:** ES Modules (ESM)
- **Environment Variables:** dotenv

---

## 📁 Project Structure

```
MIS/
├── config/
│   └── db.js                         # MongoDB connection
├── controllers/
│   ├── CreateStudentController.js    # Handle student creation
│   ├── DeleteStudentController.js    # Handle student deletion
│   ├── GetOneStudentController.js    # Handle fetching one student
│   ├── GetStudentController.js       # Handle fetching all students
│   └── UpdateStudentController.js    # Handle student updates
├── middlewares/
│   └── getSchool.js                  # Middleware to fetch student by ID
├── models/
│   └── class-data.js                 # Mongoose schema/model
├── routes/
│   └── schoolRoutes.js               # API route definitions
├── .env                              # Environment variables
├── .gitignore
├── package.json
└── server.js                         # Entry point
```

---

## ⚙️ Installation & Setup

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/MIS-SYSTEM.git
cd your-repo
```

**2. Install dependencies**
```bash
npm install
```

**3. Create a `.env` file in the root directory**
```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

**4. Start the server**
```bash
# Development (with nodemon)
npm run dev

# Production
npm start
```

---

## 📌 API Endpoints

Base URL: `http://localhost:3000/schools`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all students |
| POST | `/create` | Create a new student |
| GET | `/:id` | Get a single student by ID |
| PATCH | `/update/:id` | Update a student by ID |
| DELETE | `/delete/:id` | Delete a student by ID |

---

## 📋 Student Schema

| Field | Type | Required | Unique |
|-------|------|----------|--------|
| studentId | String | ✅ | ✅ |
| StudentsName | String | ✅ | ❌ |
| Age | Number | ✅ | ❌ |
| Grade | String | ✅ | ❌ |
| FeesPaid | Number | ✅ | ❌ |

---

## 📬 Example Request & Response

**POST `/schools/create`**

Request body:
```json
{
  "studentId": "STU001",
  "StudentsName": "John Doe",
  "Age": 16,
  "Grade": "10A",
  "FeesPaid": 50000
}
```

Response:
```json
{
  "_id": "699db21749bcd914ea5c35e2",
  "studentId": "STU001",
  "StudentsName": "John Doe",
  "Age": 16,
  "Grade": "10A",
  "FeesPaid": 50000
}
```

---

## 🔒 Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | Your MongoDB connection string |
| `PORT` | Port the server runs on (default: 3000) |

---

## 👤 Author

**ishemagurnaud0-maker**  
GitHub: [@ishemagurnaud0-maker](https://github.com/ishemagurnaud0-maker)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).



