const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategie');

passport.use(LocalStrategy);
