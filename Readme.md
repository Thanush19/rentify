Sure, I'll update the README to include the existing AWS and Vercel links, and make the language more professional.

---

# Rentify

Rentify is a comprehensive solution for all your renting needs. It offers distinct functionalities for both buyers and sellers, providing a seamless and efficient platform to manage property rentals.

## Roles

- **Buyer**
- **Seller**

## Tech Stack

- **Frontend:** React.js
- **Backend:** Express.js
- **Database:** PostgreSQL
- **Hosting:** AWS Amplify, Vercel, Render

## Primary Features

- **Role-Based Authentication:** Ensures secure and appropriate access for buyers and sellers.
- **Seller Features:**
  - List properties for sale
  - Track sale orders
  - Perform CRUD operations on property listings
- **Buyer Features:**
  - View properties for sale near their location
  - Track items in the cart
  - Add specific properties to the cart
- **Additional Features:**
  - Pagination for efficient data handling
  - Seamless animations for an enhanced user experience
  - Real-time map integration for location tracking

## Hosting Links

- **GitHub Repository:** [Rentify GitHub](https://github.com/Thanush19/rentify.git)
- **AWS Deployment:** [Rentify on AWS Amplify](https://main.dvoc48ea97oy0.amplifyapp.com/)
- **Vercel Deployment:** [Rentify on Vercel](https://rentify-jade-theta.vercel.app/)

## Setup Instructions

### Prerequisites

- Node.js
- PostgreSQL
- AWS, Vercel, or Render account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Thanush19/rentify.git
   ```
2. Navigate to the project directory:
   ```bash
   cd rentify
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Database Setup

1. Ensure PostgreSQL is installed and running.
2. Create a new database for the project.
3. Update the database configuration in `config/db.js` with your PostgreSQL credentials.

### Running the Application

1. Start the backend server:
   ```bash
   npm run server
   ```
2. Start the frontend server:
   ```bash
   npm start
   ```
