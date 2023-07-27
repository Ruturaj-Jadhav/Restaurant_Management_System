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

3. Update Docker-compose file
   ```bash
   NODE_ENV='production'
   PORT="PORT i.e 8000"
   RAZORPAY_KEY_ID="YOUR_RAZORPAY_KEY"
   RAZORPAY_KEY_SECRET="YOUR_RAZORPAY_SECRET"
   JWT_SECRET = "YOUR_JWT_SECRET"
   DATABASE_URL="mongodb://127.0.0.1:27017/"DATABASE_NAME"?directConnection=true"
   ```
   
4. Run Docker-compose build command
  ```bash
   sudo Docker-compose build
   ```

5. Run Docker-compose up command
 ```bash
   sudo Docker-compose up
   ```
## Usage

1. Access the application in your web browser by navigating to `http://localhost:8000`.

2. Restaurants can create an account and log in to manage their menu. They can add dishes, specify details such as the name, description, and price.

3. Once the menu is set up, restaurants can generate a unique QR code for each table in their establishment.

4. Customers can visit the restaurant and scan the QR code using their smartphone's QR code scanner. The menu items will be displayed on their device.

5. Customers can browse the menu, add items to their cart, and proceed to the checkout process.

6. Upon checkout, customers will be prompted to make a payment for their order.

7. Restaurants can view the orders placed on each table and mark their status as complete or pending.

8. Restaurants can also access a history of previous orders, allowing them to track and manage their order fulfillment process efficiently.

## Technologies Used

- Node.js: Backend development platform
- MongoDB: Database management system
- EJS: Templating engine for generating dynamic HTML
- CSS: Styling the frontend
- Docker : For Containerizing the project



Enjoy using the QR-based Food Ordering System!
