'use strict';
const Alexa = require('alexa-sdk');
let APP_ID = process.env.APP_ID;
let S3 = process.env.S3_PERSISTENCE_BUCKET;
let S31 = proccess.env.S3_PERSISTENCE_BUCKET_AUDIO_1;
let S32 = proccess.env.S3_PERSISTENCE_BUCKET_AUDIO_2;
let S33 = proccess.env.S3_PERSISTENCE_BUCKET_AUDIO_3;
const SKILL_NAME = 'Annoy my Mom';
//const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'mommy why do you not understand what i am meant to do';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'but mommy...why';
const time ='<break time=".5s"/>';
const card = 'annoy you agin later!';
const a = 'mum';
const b = 'mom';
const c = 'mommy';
const d = 'mama';
const e = 'please mommy please'
const f ='<audio src="https://s3.amazonaws.com/alexa2020/r1.m4a"/>';
var music = [ 
    '<audio src="https://alexa2018.s3.amazonaws.com/converted_audio20201213-23634-du6uum.mp3"/>',
    '<audio src="https://alexa2018.s3.amazonaws.com/converted_audio20201213-23634-1ev1rj4.mp3"/>',
    '<audio src="https://alexa2018.s3.amazonaws.com/converted_audio20201213-23634-1kmqfdc.mp3"/>',
    '<audio src="https://alexa2018.s3.amazonaws.com/converted_audio20201213-23634-4k1rtz.mp3"/>'
];   
'<img src="myfolder/' + myphoto + '" />'

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