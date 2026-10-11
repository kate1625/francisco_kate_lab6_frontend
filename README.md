# LavaLust React frontend

This React/Vite application is the client for the LavaLust product API.

## Configure the API

Copy `.env.example` to `.env` for local development. `VITE_API_URL=/api` uses
the Vite proxy, which forwards requests to `http://localhost:3000`. For a
production build, set `VITE_API_URL` to the API base URL ending in `/api`, for
example `https://api.example.com/api`, in the frontend hosting provider's build
environment.

The API deployment must allow the frontend's origin through its
`API_ALLOWED_ORIGIN` setting.

## Run locally

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
```
