const express = require('express');
const app = express();

app.use(express.static('dist\my-second-angular'));


app.listen(process.env.PORT ||8080);