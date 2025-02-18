const express = require("express");
const router = express.Router();
const User = require("../models/Users");

// Register User
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const newUser = await User.create({ name, email, password, role });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Users
router.get("/", async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
