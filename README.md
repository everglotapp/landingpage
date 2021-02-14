# everglot.com

Everglot landing page.

## Development

Install docker and docker-compose. Run

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

The landing page should be running on [localhost:3000](http://localhost:3000).

## Deploy

### Configure

Setup an `.env` file with your desired database credentials as follows. Upon container creation this will create the specified Postgres role and a database.

```bash
PGHOST=db
PGPORT=5432
POSTGRES_USER=everglot_lp_user
POSTGRES_PASSWORD=CHANGEME
POSTGRES_DB=everglot_lp_db
```

If you forgot to do this before creating the container, you need to destroy the container with `docker-compose rm db` (note: this hasn't been tested thoroughly).

### Start services

Install docker and docker-compose. Run

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```

The landing page should be exposed to localhost on port 3000.
