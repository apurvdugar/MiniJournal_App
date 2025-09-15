# Mini Journal App

A full-stack mini journal application with user authentication and personal journal entry management.

## Project Structure

```
App/
  
  server/           # Backend (Node.js, Express, MongoDB)
    config/         # Database and token configuration
    controllers/    # Route controllers (auth, entry)
    middleware/     # Authentication middleware
    models/         # Mongoose models (User, Entry)
    routes/         # Express routes (auth, user, entry)
    .env            # Environment variables
    index.js        # Server entry point
    package.json    # Node dependencies and scripts
```

## Features

- User signup and login with JWT authentication
- Secure password hashing
- Create, read, update, and delete (CRUD) journal entries per user
- Protected routes using authentication middleware

### Setup

1. **Clone the repository**  
   ```
   git clone https://github.com/apurvdugar/MiniJournal_App
   cd App/server
   ```

2. **Install dependencies**  
   ```
   npm install
   ```

3. **Configure environment variables**  
   Create a `.env` file in the `server/` directory with the following:
   ```
   dbUrl=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

4. **Start the server**  
   ```
   npm run dev
   ```
   The server will run on [http://localhost:8000](http://localhost:8000) by default.

## API Endpoints

### Auth

- `POST /api/auth/signup` — Register a new user
- `POST /api/auth/signin` — Login and receive a JWT token

### User

- `GET /api/user/current` — Check authentication (requires cookie token)

### Entry

- `POST /api/entry/addNewEntry` — Create a new journal entry
- `GET /api/entry/all` — Get all entries for the authenticated user
- `PATCH /api/entry/:id` — Update an entry by ID
- `DELETE /api/entry/:id` — Delete an entry by ID

## Notes

- All `/api/entry/*` and `/api/user/current` routes require authentication via a JWT token stored in cookies.
- Passwords are hashed using bcrypt before storage.

## License

This project is licensed under the ISC License.