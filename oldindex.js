// Name: firstTimeEverPuppy
// Author: Chuck Phelps - PhelpsIncDotNet
// Date: 03/15/2018
// Pupose: Alexa Skill to ask how First Time Ever Puppy is doing
// Version: 0.1
// Updates: Added functions.

//Call in the Alexa SDK
const Alexa = require('alexa-sdk');
//Define the App ID in the Alexa Developer Console.
const APP_ID = "amzn1.ask.skill.f3153d59-7b2f-4f54-9c59-e07910bbc21b"

const cardTitle = 'First Time Ever Puppy Cookies';
const cardContent = 'I love cookies with Sophie!';
const imageObj = {

    smallImageUrl: 'https://s3.amazonaws.com/phelpsinc-first-time-ever-puppy/firsttimeverpuppycookies.jpg',
    largeImageUrl: 'https://s3.amazonaws.com/phelpsinc-first-time-ever-puppy/firsttimeverpuppycookies.jpg'
};

const handlers = {
    'howAreYou' : function() {
        this.response.speak('Good! Arf! I love Sophie. Arf! Arf!');
        this.emit(':responseReady');
    },

    'puppy_cookies' : function() {
        this.response.speak('Arf! I love cookies with Sophie. Arf! Arf!')
                    .cardRenderer(cardTitle, cardContent, imageObj);
        this.emit(':responseReady');
    },

    'Unhandled' : function () {
        this.response.speak('Sorry, I didn\'t get that. Try saying Ask first time ever puppy, how are you today or do you like cookies?')
            .listen('Try saying a number.');
        this.emit(':responseReady');
    }
};

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
}
