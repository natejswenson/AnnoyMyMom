

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.d6592a4d-aca0-4b53-9192-c274b958a44a';

const SKILL_NAME = 'Annoy my Mom';
//const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'why are you leaving,why are you leaving me?';
const time ='<break time=".5s"/>';
const card = 'annoy you agin later!';
//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'dad'+time+'mom'+time+ 'mom' + time + 'mom' + time + 'mom' + time + 'mom' + time + 'mom' + time + 'mom',
    'dad'+time+'mommy'+time+ 'mommy'+time+ 'mommy'+time+ 'mommy'+time+ 'mommy'+time+ 'mommy'+time+ 'mommy'+time+ 'mommy',
    'dad'+time+'mom'+time+ 'mom' + time+'mommy'+time+ 'mommy'+time+ 'mommy'+time+ 'mama'+time+ 'mama'+time+ 'mama',
    'dad'+time+ 'mama'+time+ 'mama'+ time + 'mama'+time+ 'mama'+time+ 'mama' + time + 'mama'+time+ 'mama'+time+ 'mama'
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

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