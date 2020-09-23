

'use strict';
const Alexa = require('alexa-sdk');
let APP_ID = process.env.APP_ID;

const SKILL_NAME = 'Annoy my Mom';
//const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'mommy why do you not understand what i am meant to do';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'but mommy...why';
const time ='<break time=".5s"/>';
const card = 'annoy you agin later!';

const data = [
    'mum'+time+'mom'+time+ 'mom' + time + 'mom' + time + 'mom' + time + 'mom' + time + 'mom' + time + 'mom',
    'mum'+time+'mommy'+time+ 'mommy'+time+ 'mommy'+time+ 'mommy'+time+ 'mommy'+time+ 'mommy'+time+ 'mommy'+time+ 'mommy',
    'mom'+time+'mom'+time+ 'mom' + time+'mommy'+time+ 'mommy'+time+ 'mommy'+time+ 'mama'+time+ 'mama'+time+ 'mama',
    'mommy'+time+ 'mama'+time+ 'mama'+ time + 'mama'+time+ 'mama'+time+ 'mama' + time + 'mama'+time+ 'mama'+time+ 'mama'
];

const handlers = {
    'LaunchRequest': function () {
        this.emit('annoymyMomIntent');
    },
    'annoymyMomIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = randomFact;

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