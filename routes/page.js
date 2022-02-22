const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = null;
    res.locals.followerCount = 0;
    res.locals.followingCount = 0;
    res.locals.followerIdList = [];
    next();
});

router.get('/profile', (req, res) => {
    res.render('profile', { title: 'My Information - ExpressSNS', user: req.user });
});

router.get('/join', (req, res) => {
    res.render('join', {
        title: 'Sign In - ExpressSNS',
        user: req.user,
    });
});

router.get('/', (req, res, next) => {
    const twits = [];
    res.render('main', {
        title: 'ExpressSNS',
        twits: [],
        user: req.user,
    });
});


module.exports = router;