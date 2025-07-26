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
2. Install dependencies once the Node project is bootstrapped.
3. Configure environment variables for Withings API credentials and database access.
4. Use `docker compose up` to start the database and application services.

This README will be expanded with setup and usage instructions as the project evolves.

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for details.
