/**
 * Created with IntelliJ IDEA.
 * User: sebastian
 * Date: 21.07.13
 * Time: 22:54
 * To change this template use File | Settings | File Templates.
 */
'use strict';
function authUser() {
    FB.login(checkLoginStatus, {scope:'email'});
}

// Check the result of the user status and display login button if necessary
function checkLoginStatus(response) {
    if(response && response.status === 'connected') {
        console.log('User is authorized');

        // Hide the login button
        document.getElementById('loginButton').style.display = 'none';

        // Now Personalize the User Experience
        console.log('Access Token: ' + response.authResponse.accessToken);
        getFriends();
    } else {
        console.log('User is not authorized');

        // Display the login button
        document.getElementById('loginButton').style.display = 'block';
    }
}



