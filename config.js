
exports.config = {
    mongoUrl: 'mongodb://localhost:27017/sobol-db',
    binance: {
    },
    redis: {
        host: '',
        port: 6379,
        password: '',
    },
    //symbols: ['BTCUSDT', 'ETHUSDT', 'DOGEUSDT', 'SHIBUSDT', 'MATICUSDT', 'ADAUSDT', 'SOLUSDT', 'DOTUSDT', 'LUNAUSDT', 'AVAXUSDT', 'LINKUSDT', 'XRPUSDT', 'LTCUSDT'],
    symbols: ['BTCUSDT','DOGEUSDT'],
    interval: '1s',
    candlestickLimit: 5,

    // Backtesting
    backtestSymbols: ['BTCUSDT','DOGEUSDT'],
    backtestInterval: '1m',
    backtestCandlestickLimit: 1440,
}