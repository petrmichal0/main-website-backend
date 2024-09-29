const express = require("express");
const cors = require("cors");
const routes = require("./routes"); // Naše vlastní routy
require("dotenv").config(); // Načítání env proměnných

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Povolíme komunikaci s frontendem
app.use(express.json()); // Pro čtení JSON v těle požadavku

// Základní endpointy
app.use("/api", routes);

// Spuštění serveru
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
