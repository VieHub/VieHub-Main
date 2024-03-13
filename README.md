# Viehub

Welcome to Viehub! This project combines cutting-edge server and client technologies to deliver an exceptional web application experience. Dive into our comprehensive guide below to get started with development, production setup, and contributing to Viehub.

## Description

(Provide a high-level overview of Viehub, including its purpose, unique features, and the problems it aims to solve. This section should give visitors a clear understanding of the project's value and its significance.)

## Features

This project boasts a range of features designed to provide an efficient, scalable, and user-friendly web application. Key features include:

- Feature 1: Description
- Feature 2: Description
- Feature 3: Description

(Expand on each feature with a brief description to give readers an idea of what to expect.)

## Project Structure

Viehub is structured into two main directories to cleanly separate concerns between client-side and server-side code:

```plaintext
/
    /client     # Contains all client-side code and resources
    /server     # Hosts server-side application code and APIs
```

## Getting Started

Follow these steps to set up your environment for development on both the client and server sides of Viehub.

### Requirements

- Node.js and npm (for client development)
- Python and Poetry (for server development)
- Ports 8000 and 4173 must be available

### Setup Environment

Copy `.env.example` to `.env` in both `/server` and `/client` directories. Fill in the necessary values based on your local setup or deployment needs.

### Start Development Server

#### Backend with Poetry

For backend server development, navigate to the `/server` directory. Use Poetry for dependency management and environment setup.

- **Install Poetry**: Refer to the [official Poetry documentation](https://python-poetry.org/docs/) for installation instructions.
- **Add dependencies**: To add new dependencies, use `poetry add <dependency-name>`.
- **Start the backend server**:
    ```bash
    poetry run start
    ```

#### Frontend with npm

For client-side development, navigate to the `/client` directory.

- **Install dependencies**: Execute `npm install` to install necessary packages.
- **Start the development server**:
    ```bash
    npm run dev
    ```

This command will start the development server for the frontend, usually on port 3000, allowing live reloading for a seamless development experience.

### Production Server

For production deployment, ensure that you have configured the environment variables appropriately in both the `/server` and `/client` `.env` files. The specifics of production deployment will depend on your hosting solution and might involve additional steps such as building the client-side application with `npm run build`.

## Contribution

We welcome contributions to Viehub! Please refer to [CONTRIBUTION.md](CONTRIBUTION.md) for guidelines on how to contribute to this project, including coding standards, pull request processes, and other important information.

By following the above guidelines, you can set up your development environment for Viehub and start contributing to its development.
