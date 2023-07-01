const WebSocket = require('ws');
const _ = require('lodash');
const Redis = require('redis');
const { config } = require('../../config');
const { fetchHistoricalData } = require('../common/fetchHistoricalData');
const util = require('util')


// Initialize Binance API 
const Binance = require('binance-api-node').default;
const client = Binance();


// set available symbols
const symbols = config.symbols;
let candlesticks = [];

// Create symbol  objects
candlesticks = symbols.reduce((acc, symbol) => {
    acc[symbol] = {
        set : false,
        data : []
    };
    return acc;
}, {});


// Create websocket connection to Binance API and subscribe to symbol streams 
const candlestickStream = client.ws.candles(symbols, config.interval, (candlestick) => {
    if( candlestick.isFinal ) {
        //console.log(candlestick.symbol);
        candlesticks[candlestick.symbol].set = true;
        candlesticks[candlestick.symbol].data = _.takeRight([...candlesticks[candlestick.symbol].data, candlestick], config.candlestickLimit);

        // Verify that all symbols have been set
        let completed = true;
        for( let symbol of symbols ) {
            if( !candlesticks[symbol].set ) {
                completed = false;
                break;
            }
        }   

        // Send request
        if( completed ) {
            console.log("=====================================");
            console.log("Sending Candlesticks: ", candlesticks);
            console.log(util.inspect(candlesticks, false, null, true ))


            // Reset all symbols
            for( let symbol of symbols ) {
                candlesticks[symbol].set = false;
            }  
        }

    }
})