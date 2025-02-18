const sequelize = require("./config/database");
const User = require("./models/Users");
const Product = require("./models/Product");
const Order = require("./models/Order");
const OrderDetails = require("./models/OrderDetails");
const Payment = require("./models/Payment");
const Review = require("./models/Review");

sequelize.sync({ force: true }) // WARNING: This will delete existing tables!
    .then(() => {
        console.log("Database & tables created!");
        process.exit();
    })
    .catch((err) => console.error("Error syncing database:", err));
