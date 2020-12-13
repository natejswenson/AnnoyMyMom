

'use strict';
const AWS = require('aws-sdk');
const Alexa = require('alexa-sdk');
let APP_ID = process.env.APP_ID;
const SKILL_NAME = 'Annoy my Mom';
//const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'mommy why do you not understand what i am meant to do';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'but mommy...why';
const time ='<break time=".5s"/>';
const card = 'annoy you agin later!';



var music = [   '<audio src="https://alexa2020.s3.amazonaws.com/r1.m4a"/>',
                '<audio src="https://alexa2020.s3.amazonaws.com/r12.m4a/>',
                '<audio src="https://alexa2020.s3.amazonaws.com/r3.m4a/>',
                '<audio src="https://alexa2020.s3.amazonaws.com/r4.m4a"/>'
]
//Set day and load variables

var random =function getRandomItem(array) {

    let i = 0;
    i = Math.floor(Math.random() * array.length);
    return (i);
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('annoymyMomIntent');
    },
    'annoymyMomIntent': function () {
      
        const speechOutput =  music[random(music)];

        this.response.cardRenderer(SKILL_NAME, card);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
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