/**
 * Created with IntelliJ IDEA.
 * User: sebastian
 * Date: 20.07.13
 * Time: 01:29
 * To change this template use File | Settings | File Templates.
 */

define(['facebook'], function(){
    'use strict';
    FB.init({
        appId      : '601884236511950',
        frictionlessRequests : true,
        channelUrl : '//yourdomain.com/channel.html'
    });
    FB.getLoginStatus(checkLoginStatus);
});