# JWT Basics API

A simple Express.js API demonstrating JSON Web Token (JWT) authentication basics.

## Features

- User login authentication
- JWT token generation and verification
- Protected routes using JWT middleware
- Error handling middleware
- Environment variable configuration

## Project Structure

```
starter/
├── controllers/
│   └── main.js         # Main controller for login and dashboard
├── middleware/
│   ├── auth.js         # JWT authentication middleware
│   └── error-handler.js # Custom error handling middleware
├── public/
│   ├── browser-app.js  # Frontend JavaScript
│   ├── index.html      # Main HTML page
│   └── styles.css      # Styling
├── routes/
│   └── main.js         # API routes definition
├── .env               # Environment variables
├── app.js            # Express app configuration
└── package.json      # Project dependencies
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file in the root directory:
```
JWT_SECRET=your-secret-key
JWT_LIFETIME=30d
```

3. Start the server:
```bash
npm start
```

## API Endpoints

### POST /api/v1/login
- Authenticates user and generates JWT token
- Request body: `{ username, password }`
- Returns: `{ msg: 'user created', token }`

### GET /api/v1/dashboard
- Protected route that requires JWT authentication
- Requires Authorization header with Bearer token
- Returns: `{ msg, secret }`

## Authentication

The API uses JWT for authentication. To access protected routes:
1. Get token from login endpoint
2. Add token to Authorization header:
```
Authorization: Bearer <your-token>
```

## Error Handling

The API includes custom error handling for:
- Invalid credentials
- Missing authentication token
- Invalid/expired tokens
- Server errors

## Testing

Use the provided frontend interface or tools like Postman to test the API endpoints.

## Dependencies

- express
- jsonwebtoken
- dotenv
- express-async-errors
- http-status-codes
- mongoose

## License

MIT
