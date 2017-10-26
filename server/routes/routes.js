// MAYBE CALL THIS FILE API INSTEAD OF ROUTES
// ROUTES ARE FOUND IN ROUTES/INDEX.JS

var express = require('express');
module.exports = function (app) {
    var users = require('../controllers/users');
    
    app.get('/', function (req, res) {
        if (req.session.user) {
            res.render('index', {
                username: req.session.username,
                msg: req.session.msg,
                favorites: req.session.favorites
            });
        } else {
            req.session.msg = 'Access denied!';
            res.redirect('/login');
        }
    });

    app.get('/login', function (req, res) {
        if (req.session.user) {
            res.redirect('/');
        }
        res.render('login', { msg: req.session.msg });
    });

    app.get('/user', function (req, res) {
        if (req.session.user) {
            res.render('user', { msg: req.session.msg });
        } else {
            req.session.msg = 'Access denied!';
            res.redirect('/login');
        }
    });

    app.get('/signup', function (req, res) {
        if (req.session.user) {
            res.redirect('/');
        }
        res.render('signup', { msg: req.session.msg });
    });

    app.get('/logout', function (req, res) {
        req.session.destroy(function () {
            res.redirect('/login');
        });
    });

    // app.post('/signup', users.signup);
    // app.post('/user/update', users.updateUser);
    // app.post('/user/delete', users.deleteUser);
    // app.get('/user/profile', users.getUserProfile);
    app.post('/', users.logIn);
    app.post('/requestPasswordReset', users.requestPasswordReset);

    app.get('/usernames', users.getUsernames);
}