const mongoose = require('mongoose');
const mongoClient = require('mongodb').MongoClient;
const express = require('express');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    location: String
});

userSchema.methods.dudify = function () {
    this.name = this.name + '-dude';

    return this.name;
}

const User = mongoose.model('User', userSchema);

const chris = new User({ name: "petooh", username: "pok", pass: "123" });

chris.dudify().then(result => console.log("NAME IS " + result));

chris.save();

