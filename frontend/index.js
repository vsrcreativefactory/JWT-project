const express = require('express')
const path = require('path')

require('dotenv').config()

const registerRoute = require('./routes/auth/register')

const app = express()

app.use(express.json()) //middleware

app.use(express.static('client/build'))
app.get('*', (req, res) => {
    return res.sendFile(path.resolve(__dirname, 'client','build','index.html'))
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


// /Users/HP/Desktop/JWT project/JWT_project/frontend/client/build/indexedDB.html

