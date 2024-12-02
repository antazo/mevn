# MEVN

MEVN Stack (MongoDB, Express.js, Vue.js, Node.js) using containers for a scalable, containerized development environment.

## Documentation

1. Start the MEVN containers

```bash
docker-compose up --build
```

This will:

Launch a MongoDB database container.
Start the Express.js backend on <http://localhost:5000>.
Start the Vue.js frontend on <http://localhost:8080>.

1. Testing the Stack

Navigate to <http://localhost:8080> to see the Vue.js frontend.
The frontend can make API requests to the backend (<http://localhost:5000>).
