const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false, }));
app.use(express.static(path.join(__dirname, 'public' )))

// app.use((req, res, next) => {
//     console.log('Console in the middleware');
//     next(); //Allows the request to continue to the next middleware in the line
// });

// app.use('/',(req, res, next) => {
//     // console.log('This always runs');
//     next();
// });

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'),);
});


const server = http.createServer(app);

server.listen(3000);