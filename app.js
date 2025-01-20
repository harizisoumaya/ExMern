const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const categorieRouter = require("./routes/categorie.route");
const scategorieRouter = require("./routes/scategorie.route");
const articleRouter = require("./routes/article.route");
const userRouter =require("./routes/user.route")


// Load environment variables
dotenv.config();

// Enable CORS
app.use(cors());

// BodyParser Middleware
app.use(express.json());

// Connect to the database (use either DATABASE or DATABASECLOUD)
mongoose.connect(process.env.DATABASECLOUD || process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Database Successfully Connected");
})
.catch(err => {
    console.error("Unable to connect to database", err);
    process.exit(1);
});

// Routes
app.use('/api/categories', categorieRouter);
app.use('/api/scategories', scategorieRouter);
app.use('/api/articles', articleRouter);
app.use('/api/users', userRouter);


// Test route
app.get("/", (req, res) => {
    res.send("Bonjour");
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
