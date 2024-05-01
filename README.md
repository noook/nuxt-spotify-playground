# Nuxt Spotify — Now playing example

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Configuration

Create a `.env` file in the root of the project with the following content:

```bash
NUXT_SPOTIFY_CLIENT_ID=YOUR_SPOTIFY_CLIENT_ID
NUXT_SPOTIFY_CLIENT_SECRET=YOUR_SPOTIFY_CLIENT_SECRET
# Will be filled in the next step
# NUXT_SPOTIFY_REFRESH_TOKEN=
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

## Generate Refresh Token

Head to `http://localhost:3000`, open the Nuxt Devtools under the "Server tasks tab", then run the `spotify:auth` command. This will
output an authorization URL where you need to authorize the app. After that, you will be redirected on the app with an access token object.

Copy the `refresh_token` value and paste it in the `.env` file.

```bash
NUXT_SPOTIFY_REFRESH_TOKEN=<refresh_token>
```

## Using the refresh token

Now that you generated your initial token refresh, you can pass it as a runtime environment variable,
so you don't have to generate it every time you start the server. This is also how you'll use it in production.

You can test your refresh token by running the server task `spotify:now` in the devtools.
