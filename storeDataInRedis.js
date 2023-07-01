const Redis = require('redis');

const storeDataInRedis = (redisConfig, symbol, data) => {
    const client = Redis.createClient(redisConfig);

    // Store the candlestick data in Redis
    client.set(`candlesticks:${symbol}`, JSON.stringify(data), (error, result) => {
    if (error) {
        console.error('Error storing data in Redis:', error);
    } else {
        console.log(`Data stored in Redis for ${symbol}`);
    }

    client.quit(); // Close the Redis connection
    });
};

module.exports = storeDataInRedis;
