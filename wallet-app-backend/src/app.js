const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

// Load env vars
dotenv.config()

// Route imports
const authRoutes = require('./routes/auth')
const accountRoutes = require('./routes/accounts')
const categoryRoutes = require('./routes/categories')
const transactionRoutes = require('./routes/transactions')
const budgetRoutes = require('./routes/budget')

// Middleware imports
const { errorHandler } = require('./middleware/errorHandler')

const app = express()

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/wallet-app?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.7")
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err))

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/accounts', accountRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/transactions', transactionRoutes)
app.use('/api/budget-settings', budgetRoutes)

// Test route
app.get("/", (req, res) => {
    res.send("API Working");
  });

// Error handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}) 