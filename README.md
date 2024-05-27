


# Virtual Event Management Platform

This project is a backend system for a virtual event management platform. It features user registration, event scheduling, and participant management, all managed through in-memory data structures. It supports secure user authentication using bcrypt for password hashing and JWT for session management. The platform provides RESTful API endpoints for various functionalities such as user registration, login, event creation, event updating, and participant event registration.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- **User Authentication:** Secure registration and login using bcrypt for password hashing and JWT for token-based authentication.
- **Event Management:** Create, update, and delete events, with information like date, time, description, and participant list.
- **Participant Management:** Allow users to register for events and manage their event registrations.
- **Asynchronous Operations:** Sending email notifications asynchronously using Nodemailer.

## Technologies

- Node.js
- Express.js
- bcryptjs
- jsonwebtoken
- nodemailer

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/d3vashish/eventmanager.git
   cd eventmanager
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   node app.js
   ```

## Usage

Use tools like Postman or curl to interact with the API. The server runs on `http://localhost:3000`.

## API Endpoints

### User Authentication

- **Register a new user**
  ```sh
  POST /auth/register
  ```
  - Request Body:
    ```json
    {
      "email": "user@example.com",
      "password": "password",
      "role": "attendee" // or "organizer"
    }
    ```

- **Login**
  ```sh
  POST /auth/login
  ```
  - Request Body:
    ```json
    {
      "email": "user@example.com",
      "password": "password"
    }
    ```

### Event Management

- **Create a new event** (Organizer only)
  ```sh
  POST /events
  ```
  - Request Header:
    ```sh
    Authorization: Bearer <token>
    ```
  - Request Body:
    ```json
    {
      "title":"TechEvent",
      "date": "2024-06-01",
      "time": "10:00 AM",
      "description": "Event description"
    }
    ```

- **Update an event** (Organizer only)
  ```sh
  PUT /events/:id
  ```
  - Request Header:
    ```sh
    Authorization: Bearer <token>
    ```
  - Request Body:
    ```json
    {
      "title":"TechEvent",
      "date": "2024-06-01",
      "time": "10:00 AM",
      "description": "Updated description"
    }
    ```

- **Delete an event** (Organizer only)
  ```sh
  DELETE /events/:id
  ```
  - Request Header:
    ```sh
    Authorization: Bearer <token>
    ```

- **Get all events**
  ```sh
  GET /events
  ```

### Participant Management

- **Register for an event**
  ```sh
  POST /events/:id/register
  ```
  - Request Header:
    ```sh
    Authorization: Bearer <token>
    ```



