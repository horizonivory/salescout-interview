// Write a script that:
// 1. Connects to Redis.
// 2. Saves the keys with their values.
// 3. Reads and outputs values for a given key.

// Use redis library
/*import redis from 'redis'

const client = redis.createClient();

client.on('connect', () => {
    console.log('Connected to Redis')
})*/

async function manageRedis(): Promise<void> {
    
}

module.exports = { manageRedis };