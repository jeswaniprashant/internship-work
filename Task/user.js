const mongoose = require('mongoose');
const express = require('express');

const userVariable = mongoose.Schema({
    userName: String,
    password: String
});
const userData = mongoose.model('User', userVariable);

module.exports = userData;