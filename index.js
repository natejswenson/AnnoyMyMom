'use strict';
const Alexa = require('alexa-sdk');
import util from './util.js';
var AWS = require('aws-sdk');
let APP_ID = process.env.APP_ID;
let S3_A = process.env.S3_PERSISTENCE_BUCKET;
const SKILL_NAME = 'Annoy my Mom';
const STOP_MESSAGE = 'but mommy...why';
const a = util.getS3PreSignedUrl('converted_audio20201213-23634-4k1rtz.mp3')
var music = [ 
    `<audio src=${a}/>`,
    '<audio src="https://alexa2018.s3.amazonaws.com/converted_audio20201213-23634-1ev1rj4.mp3"/>',
    '<audio src="https://alexa2018.s3.amazonaws.com/converted_audio20201213-23634-1kmqfdc.mp3"/>',
    '<audio src="https://alexa2018.s3.amazonaws.com/converted_audio20201213-23634-4k1rtz.mp3"/>'
];  

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