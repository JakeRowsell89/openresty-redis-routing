const redis = require("redis");
const client = redis.createClient("//localhost:6379");

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);

setAsync("monolith", "app2:3000/").then(redis.print).catch(console.error);
setAsync("microservice", "app1:3000/").then(redis.print).catch(console.error);