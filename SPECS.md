# Sleep Dashboard Specifications

This document outlines the high-level specifications for the Sleep Dashboard application.

## Goals

- Allow users to authenticate with their Withings account and grant access to sleep data.
- Store retrieved sleep metrics in a PostgreSQL database via Prisma.
- Present sleep trends and insights through a responsive React interface using shadcn/ui components.
- Provide a mobile-friendly experience with Tailwind CSS.

## Backend

- Node.js with TypeScript.
- Express or a similar framework will expose REST endpoints for authentication callbacks and data retrieval.
- Prisma models for users and sleep records.
- Schedule periodic synchronization of new sleep data from Withings.

## Frontend

- React application bootstrapped with Vite or Next.js.
- Tailwind CSS for styling; shadcn/ui for reusable components.
- Pages include user authentication flow, dashboard charts, and account settings.
- Charts and summaries visualize sleep duration, stages, and trends over time.

## Deployment

- Docker Compose for local development: services for the Node API and PostgreSQL database.
- Environment variables store Withings API credentials and database connection details.
- Future deployment can mirror the compose setup on a cloud provider.
