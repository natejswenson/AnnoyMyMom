'use strict';
const Alexa = require('alexa-sdk');
let APP_ID = process.env.APP_ID;
let S31 = process.env.S3_1
let S32 = process.env.S3_2
let S33 = process.env.S3_3
let S34 = process.env.S3_4
const SKILL_NAME = 'Annoy my Mom';
const STOP_MESSAGE = 'but mommy...why';
var music =[ S31,S32,S33,S34]; 
const handlers = {
    'LaunchRequest': function () {
        this.emit('annoymyMomIntent');
    },
    'annoymyMomIntent': function () {
        const factArr = music;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = randomFact;
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    }, 
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};