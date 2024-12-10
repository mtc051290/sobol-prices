# Crypto Prices WebSocket

A lightweight microservice for real-time cryptocurrency price data from Binance. This service performs calculations to generate indicators and makes the data available for integration with other services.

---

## Features

- **Real-time data**: Stream live price updates from Binance using WebSocket.
- **Indicator calculations**: Perform calculations on the data to generate actionable insights.
- **Microservice design**: Designed to integrate seamlessly with larger systems.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **Binance API key** (if needed for extended functionality)

---

## Installation

Follow these steps to set up and run the project:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/crypto-prices-websocket.git
   cd crypto-prices-websocket
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   BINANCE_API_KEY=your_binance_api_key
   BINANCE_API_SECRET=your_binance_api_secret
   PORT=3000
   ```

4. **Start the service**
   ```bash
   npm start
   ```

   The service will run on `http://localhost:3000` by default.

---

## Usage

Once the service is running, you can:

- Connect to the WebSocket endpoint to receive real-time price updates.
- Use the exposed API endpoints (if available) to fetch calculated indicators.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes.
4. Push your branch and submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Support

For any issues or questions, feel free to open an issue on GitHub or contact us directly.
