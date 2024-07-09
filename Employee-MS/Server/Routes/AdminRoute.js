const express = require("express");
const router = express.Router();
const connection = require("../utils/connection");
const jwt = require("jsonwebtoken");

router.post("/auth/adminLogin", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
  connection.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.json({ logingStatus: false, Error: "Query error" });
    }
    console.log("Result:");
    console.log(result);
    if (result.length > 0) {
      const storedEmail = result[0].email;
      console.log("Stored Email: " + storedEmail);
      const token = jwt.sign({ role: "admin", email: storedEmail }, "1234", {
        expiresIn: "1h",
      });

      res.cookie("token", token);
      return res.json({ logingStatus: true });
    } else {
      return res.json({
        logingStatus: false,
        Error: "Wrong email or password",
      });
    }
  });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ Status: true });
});

router.get('/isAuthenticated', (req, res) => {

  
  const token = req.cookies.token;
  if (!token) {
    return res.json({ isAuthenticated: false });
  }

  jwt.verify(token, "1234", (err, decoded) => {
    if (err) {
      return res.json({ isAuthenticated: false });
    }

    return res.json({ isAuthenticated: true , id: decoded.id});
  });
});

module.exports = { router };
