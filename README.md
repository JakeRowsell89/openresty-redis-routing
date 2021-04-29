# openresty-routing

Bring up your containers:
```
docker-compose up
```

Bring up redis CLI:
```
docker exec -it `docker ps -qf "name=redis"` redis-cli
```
Inside the redis container you can list the keys:
```
KEYS *
```
Or delete existing keys:
```
DEL *
```

The following requests fail due to lack of routing:
```
curl localhost/redis/microservice
curl localhost/redis/monolith
```

Seed some routing keys into redis:
```
node ./redis
```

You should now be able to route requests into your apps:
```
curl localhost/redis/microservice
curl localhost/redis/monolith
```