const express = require('express');
const app = express();

const data = [
    { id: 1 ,
      age: 3,
      name: "Fox"},
    { id: 2 ,
      age: 1,
      name: "HelloKitty"},
    { id: 3 ,
      age: 5,
      name: "Jennie"},
]

app.get('/', function (req, res) {
        res.send(data);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});