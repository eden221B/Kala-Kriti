const express = require("express");
const router = express.Router();
const Payment = require("../models/Payment");

// Make Payment
router.post("/pay", async (req, res) => {
    try {
        const newPayment = await Payment.create(req.body);
        res.status(201).json(newPayment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Payments
router.get("/", async (req, res) => {
    try {
        const payments = await Payment.findAll();
        res.json(payments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
