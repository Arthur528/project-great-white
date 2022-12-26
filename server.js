// Dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// Handlebars helpers
const helpers = require('./utils/helpers');

const hbs = exphbs.create({
    helpers
});
// Sets Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// Middleware to parse JSON/string data
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(require('./controllers/'));

// Starts the server to begin listening
sequelize.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
