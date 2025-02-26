const express = require('express')
const bodyParser = require('body-parser')
const employeesRouter = require('./routers/employees')
const salariesRouter = require('./routers/salaries')
const titlesRouter = require('./routers/titles')


const app = express();
const port = process.env.PORT || 4444

app.use(bodyParser.json())
app.use('/employees', employeesRouter)
app.use('/salaries', salariesRouter)
app.use('/titles', titlesRouter)


app.get('/', (req, res) => {
    res.send('Welcome to SUPER server!')
})

app.listen(port, () => {
    console.log(`SUPER server is mixing it up on CH.${port}!`)
})