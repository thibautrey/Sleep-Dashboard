# Sleep Dashboard

Sleep Dashboard is a web application that visualizes and analyzes sleep data fetched from the [Withings Public Health Data API](https://developer.withings.com/developer-guide/v3/integration-guide/public-health-data-api/public-health-data-api-overview/).

## Technologies

- **Node.js** with **TypeScript** for the backend
- **React** with **shadcn/ui** components for the frontend
- **Tailwind CSS** for styling
- **Prisma** ORM with **PostgreSQL** as the database
- **Docker Compose** for local development and deployment

## Overview

The project aims to provide a mobile-friendly dashboard where users can connect their Withings account, retrieve their sleep metrics, and view insightful charts and summaries. The application will handle authentication with Withings, store relevant data in a PostgreSQL database, and present it via a responsive React interface.

## Development

1. Clone this repository.
2. Run `npm install` to install project dependencies.
3. Use `npm run dev` to start the TypeScript server in development mode.
4. Run `npm run build` to compile the project for production.
5. Configure environment variables for Withings API credentials and database access.
6. Set `DATABASE_URL` in `.env` to point to your Postgres instance.
7. Run `npx prisma migrate dev --name init` to create the database tables.
8. Use `docker compose up` to start the database and application services.

## Docker Compose Setup

The `docker-compose.yml` file defines two services:

- **db** – a PostgreSQL database with default credentials `sleep`/`sleep`.
- **app** – builds the Node image from this repository and runs the compiled server.

Run `docker compose up` to build the images and launch both services.

Formatting and linting can be run with `npm run format` and `npm run lint`.

This README will be expanded with setup and usage instructions as the project evolves.

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for details.
