const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swaggerConfig')
const router = require('./routers')

app.use(express.json({strict: false}))
app.use('/api/v1', router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(PORT, () => {
    console.log(`Server is running at port:${PORT}`)
})

module.exports = app;
