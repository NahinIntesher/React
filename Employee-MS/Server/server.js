const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./utils/connection");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); // Use cookie-parser middleware to parse cookies
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

connection.connect((error) => {
  if (error) {
    console.error("Database connection failed: " + error.stack);
    return;
  }
  console.log("Connected to database.");
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const token = req.cookies.userRegistered;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized No Token" });
  }

  try {
    const decoded = jwt.verify(token, "1234");
    req.user = decoded; // Store decoded user information in request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    console.error("JWT verification error:", err);
    return res.status(401).json({ message: "Unauthorized Error" });
  }
}

// Route to handle admin login
app.post("/adminLogin", (req, res) => {
  const { email, password } = req.body;

  connection.query(
    "SELECT * FROM admin WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        console.error("Database query error:", err);
        return res
          .status(500)
          .send("An error occurred while retrieving user data");
      }

      if (results.length === 0) {
        return res.status(401).json({
          loginStatus: false,
          error: "Wrong email or password",
        });
      }

      const storedPassword = results[0].password;
      const uid = results[0].id;

      if (storedPassword !== password) {
        return res
          .status(401)
          .json({ loginStatus: false, error: "Invalid email or password" });
      }

      const token = jwt.sign({ id: uid }, "1234", { expiresIn: "10d" });
      let cookieOptions = {
        expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("userRegistered", token, cookieOptions);
      return res.json({ loginStatus: true });
    }
  );
});

// Route to handle logout
app.get("/logout", (req, res) => {
  res.clearCookie("userRegistered");
  res.json({ status: true });
});

// Route to check if user is authenticated
app.get("/isAuthenticated", verifyToken, (req, res) => {
  res.json({ isAuthenticated: true, id: req.user.id });
});

// Start the server
app.listen(3000);
