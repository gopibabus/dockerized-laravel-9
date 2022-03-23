# Dockerized Laravel Application


## Installation

Use [docker](https://www.docker.com/products/docker-desktop/) to run health-tracker on your machine.

```bash
# customize .env according to your requirement
cp .env.example .env

# customize .docker.env according to your requirement
cp .docker.env.exaple .docker.env

# Build docker service called app defined in docker-compose.yml file
docker-compose build app

# Build all services defined in docker-compose.yml file
docker-compose up --build -d
```

## Usage

> Visit http://localhost

## Contributing
Pull requests are welcome. For major changes, please open an issue first in Azure board to discuss what you would like to change.

Please make sure to update tests as appropriate.
