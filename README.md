# Apartment Listing App

## Overview

A full-stack application for managing apartment listings, built with Next.js 15 (frontend) and Nest.js (backend), using Postgres (database).

## System Requirements

- Node.js 18+
- Docker and Docker Compose
- Git

## Quick Start with Docker

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

2. Start all services using Docker Compose:

```bash
docker-compose up -d
```

This will start:

- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Backend API doc: http://localhost:5000/api-docs
- Database: postgres://nawy:123456@localhost:5432/nawy

## Manual Setup (Development)

### Databse Setup

you have two options:

1. Creating a database on a database cloud provider e.g (neon, ..etc). and add the url in api/.env

```env
DATABASE_URL=<YOUR URL>
ENABLE_SEED=true
SEEDING_COUNT=20
```

2. using the api/docker-compose.yml to create an container for the datasbase only

```bash
cd api
docker-compose up -d
```

```env
DATABASE_URL=postgres://nawy:123456@localhost:5432/nawy
ENABLE_SEED=true
SEEDING_COUNT=20
```

### Backend Setup

1. Navigate to the server directory:

```bash
cd api
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file:
   if you dont create the .env file yet in the database step, create it now.

```env
DATABASE_URL=postgres://nawy:123456@localhost:5432/nawy
ENABLE_SEED=true
SEEDING_COUNT=20
```

4. Start the development server:

```bash
pnpm start:dev
```

- The API will be available at http://localhost:5000
- The API Docs will be available at http://localhost:5000/api-docs

### Frontend Setup

1. Navigate to the client directory:

```bash
cd web
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/v1
```

4. Start the development server:

```bash
pnpm dev
```

- The application will be available at http://localhost:3000

## Backend

there are swagger api doc on http://localhost:5000/api-docs so you can see the api endpoints and its input/output

### Tech Stack

- **Framework**: Nest.js
- **Language**: TypeScript
- **Database ORM**: drizzle ORM

### API Documentation

### Base URL

```
http://localhost:5000/v1
```

### Endpoints

#### Get All Apartments

```http
GET /apartments?search={search}&page={page}&limit={limit}
```

#### Get Single Apartment

```http
GET /apartments/{id}
```

#### Create Apartment

```http
POST /apartments
```

#### Update Apartment

```http
PATCH /apartments/{id}
```

## Frontend

### Features

- Apartment listings with search and pagination
- Create new apartment page
- update an apartment page
- Detailed apartment parge with image carousel
- utilize parallel and intercepting routes concept with in create/update page then both have independant page and modal component that preserve the routing
- Real-time form validation
- Responsive design
- clean and modern design
- dark mode

### Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Management**: React Hook Form
- **Validation**: Zod
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Notifications**: Sonner

## Project Structure

```
.
├── web/                   # Frontend application
│   └── src/               # Source code
│        ├── app/          # Next.js pages and layouts
│        ├── components/   # React shared components
│        ├── config/       # config folder
│        ├── actions/      # shared actions folder
│        ├── lib/          # shared Utility and lib
│        ├── public/       # Static assets
│        └── features/     # features folder
├── api/                   # Backend application
│   └── src/               # Source code
│        ├── common/       # common component
│        ├── config/       # config folder
│        ├── database/     # Database module folder
│        └── modules/      # modules folder (all modules)
└── docker-compose.yaml    # Docker composition file
```

## Database Schema

The postgres database includes tables for:

- Apartments (details, amenities, images)
- Additional related data

## Troubleshooting

1. **Database Connection Issues**

   - Ensure postgres is running
   - Verify database credentials in .env file
   - Check if port 5432 is available

2. **Docker Issues**

   - Run `docker-compose down` and then `docker-compose up -d`
   - Check logs: `docker-compose logs -f`

3. **Frontend API Connection**
   - Verify backend is running on port 5000
   - Check network requests in browser dev tools
