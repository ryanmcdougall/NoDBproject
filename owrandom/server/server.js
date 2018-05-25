const express = require('express');
const app = express();
const port = 3005;
const bodyParser = require('body-parser')
const ctrl = require('./controller')

app.use(bodyParser.json())


app.post('/api/randomIndex/:id', ctrl.postOne)
app.get('/api/users', ctrl.getAll)
app.put('/api/users/:id', ctrl.updateOne)
app.delete('/api/users/:id', ctrl.deleteOne)

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})


