// USER METHODS ON THE DB
var express = require('express');
var router = express.Router();
var Parse = require('parse/node');

Parse.initialize("0034c69461658d030e3bca9be46601e3686d31ab");
Parse.serverURL = 'http://ec2-35-165-48-195.us-west-2.compute.amazonaws.com:80/parse'

var query_users = new Parse.Query(Parse.User);

exports.signUp = function (req, res) {
  var user = new Parse.User();
  user.set("username", "my name");
  user.set("password", "my pass");
  user.set("email", "email@example.com");

  user.signUp(null, {
    success: function(user) {
      // Hooray! Let them use the app now.
    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

exports.logIn = function (req, res) {
  // if (req.body.username === "m" && req.body.password === "p") {
  //   // pug index at /login
  //   res.render("index", {
  //       sessionToken: 1,
  //       user: {
  //         firstName: 'Michael',
  //         lastName: 'Pratt'
  //       }
  //   });
  // } else {
  //   res.send(JSON.stringify({code: 100, message: "Invalid credentials"}))
  // }



  Parse.User.logIn(req.body.username, req.body.password, {
    success: function(user) {
      res.render('index', {
        sessionToken: user.getSessionToken(),
        sessPosX: req.body.posX,
        sessPosY: req.body.posY 
      });
    },
    error: function(user, error) {
      res.render('index', error);
    }
  });
}

exports.getUsernames = function(req, res) {
  query_users.find({
    success: function(users) {
        var unames = [];
        for (var i = 0; i < users.length; ++i) {
            unames.push(users[i].get('username'));
        }
        res.json(unames);
    },
    error: function(response) {
      console.log(response);
    }
  });
}

exports.requestPasswordReset = function(req, res) {
  Parse.User.requestPasswordReset(req.body.email, {
    success: function() {
      // Password reset request was sent successfully
      console.log("An email has been sent to " + req.body.email);
    },
    error: function(error) {
      // Show the error message somewhere
      console.log("Error: " + error.code + " " + error.message);
    }
  });
}