# QR-based Food Ordering System

The QR-based Food Ordering System is a web application designed to streamline the process of ordering food in restaurants. It allows restaurants to create an account, manage their menu, generate QR codes for each table, and enables customers to conveniently place their orders.

## Installation

To set up the project locally, please follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Ruturaj-Jadhav/Restaurant_Management_System.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Restaurant_Management_System
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the necessary secret keys and configuration values. Make sure to include the required information such as database credentials and other sensitive data.
   ```bash
   NODE_ENV='production'
   PORT="PORT i.e 8000"
   RAZORPAY_KEY_ID="YOUR_RAZORPAY_KEY"
   RAZORPAY_KEY_SECRET="YOUR_RAZORPAY_SECRET"
   JWT_SECRET = "YOUR_JWT_SECRET"
   DATABASE_URL="mongodb://127.0.0.1:27017/"DATABASE_NAME"?directConnection=true"
   ```
## Usage

1. Start the application using the following command:

   ```bash
   nodemon app.js
   ```

2. Access the application in your web browser by navigating to `http://localhost:8000`.

3. Restaurants can create an account and log in to manage their menu. They can add dishes, specify details such as the name, description, and price.

4. Once the menu is set up, restaurants can generate a unique QR code for each table in their establishment.

5. Customers can visit the restaurant and scan the QR code using their smartphone's QR code scanner. The menu items will be displayed on their device.

6. Customers can browse the menu, add items to their cart, and proceed to the checkout process.

7. Upon checkout, customers will be prompted to make a payment for their order.

8. Restaurants can view the orders placed on each table and mark their status as complete or pending.

9. Restaurants can also access a history of previous orders, allowing them to track and manage their order fulfillment process efficiently.

## Technologies Used

- Node.js: Backend development platform
- MongoDB: Database management system
- EJS: Templating engine for generating dynamic HTML
- CSS: Styling the frontend



Enjoy using the QR-based Food Ordering System!
