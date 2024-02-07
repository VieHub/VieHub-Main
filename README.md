# chat-based-financial-gpt

# description

a chat based financial gpt services

# features

this project has the following features:

- ai chat
- sharing ai chat
- drag and drop canvas
- explore pages
- authentication and authorization
- billing, and subscription

# project structures

```bash
/
    /client     # client code
    /server     # server code
```

# start prod server

requirements:

- docker
- port 8000 and 4173 free

copy .env.example to .env both on /server and /client
fill in the values

```bash
docker compose -f compose.prod.yml up
```

# contribution

refer to [CONTRIBUTION.md](CONTRIBUTION.md)
