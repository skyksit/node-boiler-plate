const app = require("./app")
const PORT = process.env.PORT || 3000
const initDatabase = require("./config/database")

// Database
initDatabase()

app.listen(PORT, () => console.log(`this server listening on ${PORT}`))
