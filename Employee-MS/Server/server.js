const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./utils/connection");
const path = require("path");
const cors = require("cors");
const jwt = require("jsonwebtoken"); // Import JWT library

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

connection.connect((error) => {
  if (error) {
    console.error("Database connection failed: " + error.stack);
    return;
  }
  console.log("Connected to database.");
});

// Middleware to verify JWT token
app.post("/adminLogin", (req, res) => {
  const { email, password } = req.body;

  connection.query(
    "SELECT * FROM students WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        console.error("Database query error:", err);
        return res
          .status(500)
          .send("An error occurred while retrieving user data");
      }

      if (results.length === 0) {
        return res.status(401).send("Invalid credentials");
      }

      const storedPassword = results[0].password;
      const uid = results[0].id;

      if (storedPassword !== password) {
        return res.status(401).send("Invalid email or password");
      }

      let token = jwt.sign({ id: uid }, "1234", { expiresIn: "10d" });
      let cookieOptions = {
        expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("userRegistered", token, cookieOptions);
      res.json({ result: results[0] });
    }
  );
});

// Logout route
app.get("/logout", (req, res) => {
  res.clearCookie("userRegistered");
  res.json({ Status: true });
});

// Check if user is authenticated
app.get("/isAuthenticated", verifyToken, (req, res) => {
  res.json({ isloggedIn: true, id: req.user.id });
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const token = req.cookies.userRegistered;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, "1234");
    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT verification error:", err);
    return res.status(401).json({ message: "Unauthorized" });
  }
}

// Start the server
app.listen(3000);
