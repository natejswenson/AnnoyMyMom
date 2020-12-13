

'use strict';
const AWS = require('aws-sdk');
const Alexa = require('alexa-sdk');
let APP_ID = process.env.APP_ID;

const s3SigV4Client = new AWS.S3({
    signatureVersion: 'v4'
});


  function  getS3PreSignedUrl() {
    const arr  = [
        "r1.m4a",
        "r2.m4a",
       "r3.m4a",
       "r4.m4a",
       "r5.m4a"
    ]
    const annoyIndex= Math.floor(Math.random() * arr.length)
    const bucketName = process.env.S3_PERSISTENCE_BUCKET;
    const s3PreSignedUrl = s3SigV4Client.getSignedUrl('getObject', {
        Bucket: bucketName,
        Key: annoyIndex,
        Expires: 60*1 // the Expires is capped for 1 minute
    });
        
    const audioUrl = s3PreSignedUrl.replace(/&/g,'&amp;');

        return audioUrl
    }

const SKILL_NAME = 'Annoy my Mom';
//const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'mommy why do you not understand what i am meant to do';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'but mommy...why';
const time ='<break time=".5s"/>';
const card = 'annoy you agin later!';


const data = [
    a,b,c,d,e
];
;
const annoyance = arr[annoyIndex];
const handlers = {
    'LaunchRequest': function () {
        this.emit('annoymyMomIntent');
    },
    'annoymyMomIntent': function () {
      
        const speechOutput =  <audio src={getS3PreSignedUrl}/>;

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