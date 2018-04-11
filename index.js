// Name: firstTimeEverPuppy
// Author: Chuck Phelps - PhelpsIncDotNet
// Date: 03/15/2018
// Pupose: Alexa Skill to ask how First Time Ever Puppy is doing
// Version: 0.1
// Updated: Added functions.

//Call in the Alexa SDK
const Alexa = require('alexa-sdk');
//Define the App ID in the Alexa Developer Console.
const APP_ID = "APP ID HERE"

const handlers = {
     
    'howAreYou' : function() {
        this.response.speak('Good! Arf! I love Sophie. Arf! Arf!');
        this.emit(':responseReady');
    },

    'puppy_cookies' : function() {
        const cardTitle = 'First Time Ever Puppy Cookies';
        const cardContent = 'I love cookies with Sophie!';
        const imageObj = {

            smallImageUrl: 'https://s3.amazonaws.com/phelpsinc-first-time-ever-puppy/firsttimeverpuppycookies.jpg',
            largeImageUrl: 'https://s3.amazonaws.com/phelpsinc-first-time-ever-puppy/firsttimeverpuppycookies.jpg'
        };
        this.response.speak('Arf! I love cookies with Sophie. Arf! Arf!')
                    .cardRenderer(cardTitle, cardContent, imageObj);
        this.emit(':responseReady');
    },

    'puppy_swing' : function() {
        const cardTitle = 'First Time Ever Puppy';
        const cardContent = 'I love to swing at the park';
        const imageObj = {

            smallImageUrl: 'https://s3.amazonaws.com/phelpsinc-first-time-ever-puppy/firsttimeeverpuppyswing.jpg',
            largeImageUrl: 'https://s3.amazonaws.com/phelpsinc-first-time-ever-puppy/firsttimeeverpuppyswing.jpg'
        };
        //const url = 'https://s3.amazonaws.com/phelpsinc-first-time-ever-puppy/sounds/arf.mp3';
        //const token = 'arf';
        //const expectedPreviousToken = 'expectedPreviousStream';
        //const offsetInMilliseconds = 0;
        //this.response.audioPlayerPlay('REPLACE_ALL', url, offsetInMilliseconds);
        //this.response.speak('I love to swing at the park, with Sophie! Arf! Arf!')
        this.response.speak('<audio src="https://s3.amazonaws.com/phelpsinc-first-time-ever-puppy/sounds/arfarf.mp3" />' + 'I love to swing at the park, with Sophie! Arf! Arf!')
                    .cardRenderer(cardTitle, cardContent, imageObj);
        this.emit(':responseReady');
    },

    'Amazon.StopIntent' : function(){
        this.response.speak('Ok, Thank you for visiting with first time ever puppy.');
        this.emit('responseReady');
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
