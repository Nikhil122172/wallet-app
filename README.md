# Wallet Web Application

A comprehensive web application for managing multiple financial accounts, tracking expenses, and monitoring budgets across different payment methods (bank accounts, mobile money, cash, etc.). Built with React.js, Node.js, Express, and MongoDB.

## 🌐 Live Demo

[View Live Demo](https://wallet-app-1-u43k.onrender.com/)

<br /><hr /><br />

## 📝 Use Case

Meet Eric, an employee who struggles with managing transactions across multiple payment methods:
- Multiple bank accounts
- Mobile money accounts
- Cash transactions

This application helps Eric by:
- Tracking all transactions across different accounts
- Generating time-based reports
- Setting and monitoring budgets with notifications
- Organizing expenses with categories and subcategories
- Visualizing financial data for better understanding

<br /><hr /><br />

## ✨ Features

### User Management
- Secure user registration and login
- JWT-based authentication
- Profile management with budget settings

### Account Management
- Manage multiple account types:
  - Bank accounts
  - Mobile money accounts
  - Cash accounts
- Real-time balance tracking
- Transaction history per account

### Transaction Management
- Add income and expense transactions
- Organize transactions with categories and subcategories
- Recurring transactions support
- Filter and search functionality
- Detailed transaction history

### Budget Management
- Set monthly budget limits
- Category-specific budget limits
- Visual budget progress tracking
- Real-time budget notifications when limits are exceeded
- Real-time spending notifications

### Categories
- Create and manage transaction categories
- Add and organize subcategories
- Category-wise expense tracking
- Category budget limits
- Spending analysis by category

### Reports & Analytics
- Generate reports for custom time periods
- Category distribution charts
- Multi-account transaction summary
- Visual representation of financial data
- Export transactions in multiple formats:
  - CSV export
  - Excel export
  - PDF reports

<br /><hr /><br />

## 🛠 Tech Stack

### Frontend
- React.js
- TailwindCSS for styling
- Chart.js for data visualization
- React Router for navigation
- Axios for API requests
- React-Toastify for notifications

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

<br /><hr /><br />

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn


 **Backend Setup**
```console
cd wallet-app-backend
npm install

# Create .env file with:
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
FRONTEND_URL=http://localhost:5173
```

 **Frontend Setup**
```console
cd ../wallet-app-clientside
npm install

# Create .env file with:
VITE_API_URL="http://localhost:5000/api"
```

4. **Start Development Servers**

Backend:
```console
cd wallet-app-backend
npm run dev
```

Frontend:
```console
cd wallet-app-clientside
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

<br /><hr /><br />

## 📱 Application Structure

### Frontend Structure
```groovy
src/
├── components/
│   ├── Auth/          # Authentication components
│   ├── Dashboard/     # Dashboard and overview
│   ├── Transactions/  # Transaction management
│   ├── Budget/        # Budget tracking
│   ├── Reports/       # Reports and analytics
│   └── UI/           # Reusable UI components
├── context/          # React context providers
├── services/         # API service layer
├── utils/           # Utility functions
└── routes/          # Route definitions
```

### Backend Structure
```groovy
src/
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── models/         # Database models
├── routes/         # API routes
├── utils/          # Helper functions
└── app.js         # Main application file
```

<br /><hr /><br />

## 🔒 Security Features
- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- Input validation
- Error handling
- CORS configuration

<br /><hr /><br />

## 🌟 Key Features in Detail

### Transaction Management
- Add, edit, and delete transactions
- Categorize transactions
- Filter by date range, category, and type
- Search transactions
- Recurring transaction support

### Budget Tracking
- Set monthly budget limits
- Track category-specific budgets
- Visual progress bars
- Alert system for budget thresholds
- Real-time updates

### Reporting
- Export transactions to CSV, Excel, and PDF
- Monthly spending analysis
- Category-wise breakdowns
- Interactive charts and graphs

<br /><hr /><br />


## 🌟 Acknowledgments

- [React.js](https://reactjs.org/) - UI library
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [Chart.js](https://www.chartjs.org/) - Charts
- [Express.js](https://expressjs.com/) - Backend framework
- [MongoDB](https://www.mongodb.com/) - Database


