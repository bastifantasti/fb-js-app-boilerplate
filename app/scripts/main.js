require.config({

    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        facebook: '//connect.facebook.net/en_US/all'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery',
        },

        facebook: {
            exports: 'FB'
        }
    }
});

require(['app','fb_user','fb', 'jquery','fb_stats','fb_share','fb_og', 'bootstrap'], function (app,user,fb,$,stats) {
    'use strict';
    console.log(app);
    console.log('Running jQuery %s', $().jquery);

    countFans(533148860057441);
    countLikesPage("http://www.socialmedia-backstage.de/index.php/2013/07/05/facebook-titelbilder-neue-richtlinien/");


});
