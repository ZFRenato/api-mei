import { createClient } from "redis"

const clientCache = () => {
    // console.log(`redis://:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`);
    const client = createClient({
        url: `redis://@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
    });
    client.on('error', (err) => console.log('Redis Client Error', err));
    return client
}

export {
    clientCache
}