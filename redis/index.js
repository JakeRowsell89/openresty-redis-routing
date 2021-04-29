const redis = require("redis");
const client = redis.createClient("//localhost:6379");

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);

const entries = {
    "monolith": "app2:3000/",
    "microservice": "app1:3000/",
}

Object.entries(entries).map(([k, v]) => {
    return { key: k, promise: setAsync(k, v) }
}).map(({key, promise}) => promise.then(redis.print(`key added: ${key}`)).catch(console.error))
