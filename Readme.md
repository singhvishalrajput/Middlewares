
# Express Middleware Exploration

This project demonstrates the use of middlewares in an Express.js application. It includes various examples of custom and built-in middlewares that log requests, handle routes, and enforce access control.

## Overview

This Express.js application showcases the following:

1. **Basic Middleware**: 
   - Logs messages before processing requests.
   - Demonstrates how code after `next()` in a middleware doesn't execute.

2. **Custom Middleware**:
   - `checkToken`: Validates a token passed as a query parameter to control access to specific routes.

3. **Route-Specific Middleware**:
   - Logs messages specifically for the `/random` route.

4. **404 Error Handling**:
   - A middleware that catches undefined routes and returns a "Page not found" response.

## Project Structure

- **Middleware Examples**: Simple examples to understand how middlewares work.
- **Custom Middleware**: A custom function to validate access tokens.
- **Route Handling**: Basic route handling to demonstrate middleware flow.
- **Error Handling**: A basic 404 error handler.

## How to Run

To run this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>

2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node app.js
   ```

The server will start on `http://localhost:8080`. You can test different routes and observe the middleware behavior in the console.

## Routes

- **`/`**: Root route that returns a simple greeting message.
- **`/random`**: A route that logs a specific message and returns a response.
- **`/api`**: A protected route that requires a valid token query parameter (`?token=giveaccess`).

## License

This project is licensed under the MIT License. Feel free to use and modify it as you see fit.

---

Happy coding! 😊


