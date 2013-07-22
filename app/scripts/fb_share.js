'use strict'
/**
 * FEED :: Use this Message to Post your Story!
 *
 */
function feed(){
FB.ui(
    {
        method: 'feed',
        name: 'Facebook FEED Dialogs',
        link: 'https://developers.facebook.com/docs/reference/dialogs/',
        picture: 'http://fbrell.com/f8.jpg',
        caption: 'Reference Documentation',
        description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
    },
    function(response) {
        if (response && response.post_id) {
            console.log('Post was published.');
        } else {
            console.log('Post was not published.');
        }
    }
);
}
function send(){
    FB.ui(
        {
            method: 'send',
            name: 'Facebook SEND Dialog',
            link: 'https://developers.facebook.com/docs/reference/dialogs/',
            picture: 'http://fbrell.com/f8.jpg',
            caption: 'Reference Documentation',
            description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
        },
        function(response) {
            if (response && response.post_id) {
                console.log('Post was send.');
            } else {
                console.log('Post was not send.');
            }
        }
    );
}

/**
 APP REQUEST

 **/
function appreq(val){

    var filters  = !!val  ? val  : 'all';
    var filter = new Array(filters);

FB.ui({method: 'apprequests',
    message: 'My Great Request',
    new_style_message:true,
    filters: filter
    // SEND TO APP USERS:
    // filters: ['app_users']
    // SEND TO NON APP USERS:
    // filters: ['app_non_users']
}, requestCallback);
}

function requestCallback(response){
    if(response === null){
        console.log("app req canclet")
    }else{
        var reqID = response.request;
        var toUser = response.to;
        console.log("ID: "+reqID);
        $.each(toUser,function(index, value){
            console.log('index: %s / value: %s', index,value);
//Do your stuff here
        });



    }
}