'use strict'
function ogLike() {
    FB.api(
       'https://graph.facebook.com/me/og.likes',
       'post',
       { object: objectToLike,
         privacy: {'value': 'SELF'} },
       function(response) {
         if (!response) {
           alert('Error occurred.');
         } else if (response.error) {
           document.getElementById('result').innerHTML = 'Error: ' + response.error.message;
         } else {
           document.getElementById('result').innerHTML =
             '<a href=\"https://www.facebook.com/me/activity/' + response.id + '\">' +
             'Story created.  ID is ' + response.id + '</a>';
         }
       }
    );
  }
  
  
  function ogLoveObject(){
  FB.api(
  'me/objects/website',
  'post',
  {
    app_id: 161119590634528,
    type: "website",
    url: "http://samples.ogp.me/256986074381212",
    title: "Sample Website",
    image: "https://s-static.ak.fbcdn.net/images/devsite/attachment_blank.png",
    description: ""
  },
  function(response) {
    // handle the response
  }
);
  }
  function ogLoveAction(){
  FB.api(
  'me/smb-share:love',
  'post',
  {
    website: "http://samples.ogp.me/256986074381212"
  },
  function(response) {
    // handle the response
  }
);
}