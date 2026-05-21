# Snivia

A digital storage platform designed to help users organize and access everything that matters.

## Getting Started

Create a `.env` file at the root of your project similar to [.env.example](.env.example).

Initialize database and apply migrations:

```sh
# Replace `docker` with your container management tool (i.e. docker, podman)
docker compose -f docker-compose.yml up -d

# Apply migration
npm run db:migrate
```

Run the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TODO

- Create error and loading components when using react-query and suspense
- Handle error parameter in sign-in page

## License

[MIT](./LICENSE)
