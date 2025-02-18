require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");

// Import Routers
const userRoutes = require("./routes/userRoutes").default || require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes").default || require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes").default || require("./routes/orderRoutes");
const paymentRoutes = require("./routes/paymentRoutes").default || require("./routes/paymentRoutes");
const reviewRoutes = require("./routes/reviewRoutes").default || require("./routes/reviewRoutes");

const app = express();
const PORT = process.env.PORT || 5335;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/reviews", reviewRoutes);

// Sync Database
sequelize.sync()
    .then(() => console.log("Database connected..."))
    .catch(err => console.error("Database connection error:", err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
