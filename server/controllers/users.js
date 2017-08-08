// USER METHODS ON THE DB
var express = require('express');
var router = express.Router();
var Parse = require('parse/node');

Parse.initialize("0034c69461658d030e3bca9be46601e3686d31ab");
Parse.serverURL = 'http://ec2-35-165-48-195.us-west-2.compute.amazonaws.com:80/parse'

var query_users = new Parse.Query(Parse.User);

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

// TODO: Add functionality for login
// Store user data in the session