const express = require('express')
const app = express();
const port = 3000
const path = require('path');

app.use(express.json());
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');

const comments = [{
  username:'todd',
  comment:'ashdasjdhakhdjak'
},
{username:'baba', comment:'nhsfksahdkja'
}]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})